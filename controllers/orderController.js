const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const getCartItemsHelper = require("../utils/getCartItemsHelper");
const getUserCart = require("../utils/getUserCart");

const { checkOrder } = require("../utils/validate/validateControl");

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
