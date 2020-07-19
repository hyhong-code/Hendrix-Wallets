const pool = require("../config/postgres");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const sendError = require("../utils/sendError");
const getCartItemsHelper = require("../utils/getCartItemsHelper");
const getUserCart = require("../utils/getUserCart");
const { checkOrder } = require("../utils/validate/validateControl");
const nullifyEmptyStr = require("../utils/nullifyEmptyStr");

// @desc    Create a order using current cart
// @route   POST /api/order
// @access  Private - User role
exports.createOrder = async (req, res, next) => {
  const { name, email, phone, address, instructions } = req.body;
  const { isValid, errors } = checkOrder(email, name, phone, address);
  if (!isValid) return sendError(res, 400, errors);

  try {
    let cart = await getUserCart(req.user.id);
    const cartItems = await getCartItemsHelper(cart.id);

    // Check if there are items in cart
    if (!cartItems.length) {
      return sendError(res, 400, { message: "Put some items in cart first" });
    }

    // Get final order price
    const totalPrice = Math.round(
      (cartItems.reduce(
        (acc, cur) =>
          acc +
          parseInt(cur.quantity) *
            (parseInt(cur.price) - parseInt(cur.discount)),
        0
      ) +
        parseInt(cart.shipping_cost)) *
        (1 + parseInt(cart.tax_rate_pct_basis) / 10000) +
        Number.EPSILON
    );

    // Create order
    const order = await pool.query(
      `INSERT INTO orders(user_id, cart_id, email, name, phone, address, instructions, final_price)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;`,
      [
        req.user.id,
        cart.id,
        email,
        name,
        phone,
        address,
        instructions,
        totalPrice,
      ]
    );

    // Mark current cart as order
    cart = await pool.query(
      "UPDATE carts SET is_order = TRUE WHERE id = $1 RETURNING * ;",
      [cart.id]
    );

    // Create a new cart for user
    await pool.query("INSERT INTO carts(user_id) VALUES($1) ;", [req.user.id]);

    order.rows[0].cart = cart.rows[0];
    order.rows[0].cart.cartItems = cartItems;
    res.status(201).json({ order: order.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Get all orders of logged in user
// @route   GET /api/order
// @access  Private - User role
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await pool.query(
      `SELECT * FROM orders WHERE user_id = $1 ORDER BY orders.created_at DESC ;`,
      [req.user.id]
    );
    res.status(200).json({ orders: orders.rows });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Get details of an order
// @route   GET /api/order/:orderId
// @access  Private - User role
exports.getOrderDetailsById = async (req, res, next) => {
  try {
    const order = await pool.query("SELECT * FROM orders WHERE id = $1 ;", [
      req.params.orderId,
    ]);

    // Hanlde order not exists
    if (!order.rows.length) {
      return sendError(res, 404, {
        message: `"Order with id ${req.params.orderId} not found"`,
      });
    }

    const cart = await pool.query("SELECT * FROM carts WHERE id = $1 ;", [
      order.rows[0].cart_id,
    ]);

    const cartItems = await getCartItemsHelper(cart.rows[0].id);

    order.rows[0].cart = cart.rows[0];
    order.rows[0].cart.cartItems = cartItems;
    res.status(200).json({ order: order.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Pay for an order
// @route   POST /api/order/:orderId/pay
// @access  Private - User role
exports.payForOrder = async (req, res, next) => {
  try {
    // Hanle no stripe token
    if (!req.body.token) {
      return sendError(res, 404, { message: "Stripe token not found" });
    }

    let order = await pool.query("SELECT * FROM orders WHERE id = $1 ;", [
      req.params.orderId,
    ]);

    // Handle order not exist
    if (!order.rows.length) {
      return sendError(res, 404, {
        message: `Order with id ${req.params.orderId} not found`,
      });
    }

    // Hanlde user not the owner of order
    if (order.rows[0].user_id !== req.user.id) {
      return sendError(res, 401, { message: "User not authorized" });
    }

    // Handle order is already paid or canceled
    if (order.rows[0].status !== "CONFIRMED") {
      return sendError(res, 401, {
        message: `Order with id ${req.params.orderId} is already paid for or canceled`,
      });
    }

    // Make the charge
    await stripe.charges.create({
      amount: order.rows[0].final_price,
      currency: "usd",
      description: `$${order.rows[0].final_price / 100} charge for order ${
        order.rows[0].id
      }`,
      source: req.body.token.id,
    });

    // Change order status
    order = await pool.query(
      `UPDATE orders SET status = 'PAID' WHERE id = $1 RETURNING * ;`,
      [req.params.orderId]
    );

    // Return order details to client
    const cart = await pool.query("SELECT * FROM carts WHERE id = $1 ;", [
      order.rows[0].cart_id,
    ]);
    const cartItems = await getCartItemsHelper(cart.rows[0].id);
    order.rows[0].cart = cart.rows[0];
    order.rows[0].cart.cartItems = cartItems;

    res.status(200).json({ order: order.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Cancel an order
// @route   PATCH /api/order/:orderId/cancel
// @access  Private - User role
exports.cancelOrder = async (req, res, next) => {
  try {
    let order = await pool.query("SELECT * FROM orders WHERE id = $1 ;", [
      req.params.orderId,
    ]);

    // Handle order not exist
    if (!order.rows.length) {
      return sendError(res, 404, {
        message: `Order with id ${req.params.orderId} not found`,
      });
    }

    // Handle user not owner of order
    if (order.rows[0].user_id !== req.user.id) {
      return sendError(res, 401, { message: "User not authorized" });
    }

    // Handle order is already paid for
    if (order.rows[0].status !== "CONFIRMED") {
      return sendError(res, 400, {
        message: `Cannot cancel order ${req.params.orderId} at this time`,
      });
    }

    // Cancel the order
    order = await pool.query(
      "UPDATE orders SET status = 'CANCELED' WHERE id = $1 RETURNING * ;",
      [req.params.orderId]
    );

    // Return order details to client
    const cart = await pool.query("SELECT * FROM carts WHERE id = $1 ;", [
      order.rows[0].cart_id,
    ]);
    const cartItems = await getCartItemsHelper(cart.rows[0].id);
    order.rows[0].cart = cart.rows[0];
    order.rows[0].cart.cartItems = cartItems;

    res.status(200).json({ order: order.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Get all orders
// @route   Get /api/order/all
// @access  Private - Admin role
exports.getAllOrders = async (req, res, next) => {
  try {
    let { id, user_id, status, sort, limit } = req.query;

    id = nullifyEmptyStr(id);
    user_id = nullifyEmptyStr(user_id);
    status = nullifyEmptyStr(status);
    sort = nullifyEmptyStr(sort ? sort.split("-").join(" ") : "");
    limit = nullifyEmptyStr(limit);

    console.log(id, user_id, status, sort, limit);

    const qry = `SELECT * FROM orders
           WHERE id = COALESCE(id, $1)
           AND user_id = COALESCE(user_id, $2)
           AND status = COALESCE(status, $3)
           ORDER by COALESCE('created_at ASC', $4)
           LIMIT COALESCE(50, $5);`;

    const orders = await pool.query(qry, [id, user_id, status, sort, limit]);
    res.status(200).json({ orders: orders.rows });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
