const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const getCartItemsHelper = require("../utils/getCartItemsHelper");
const getCartId = require("../utils/getCartId");
const { checkOrder } = require("../utils/validate/validateControl");

exports.createOrder = async (req, res, next) => {
  const { name, email, phone, address, instructions } = req.body;
  const { isValid, errors } = checkOrder(email, name, phone, address);
  if (!isValid) return sendError(res, 400, errors);

  try {
    const cartId = await getCartId(req.user.id);
    const cartItems = await getCartItemsHelper(cartId);

    // Check if there are items in cart
    if (!cartItems.length) {
      return sendError(res, 400, { message: "Put some items in cart first" });
    }

    // Get total order price
    const totalPrice = cartItems.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );

    // Create order
    const order = await pool.query(
      `INSERT INTO orders(user_id, cart_id, email, name, phone, address, instructions, total_price)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;`,
      [
        req.user.id,
        cartId,
        email,
        name,
        phone,
        address,
        instructions,
        totalPrice,
      ]
    );

    // Mark current cart as order
    await pool.query("UPDATE carts SET is_order = TRUE WHERE id = $1 ;", [
      cartId,
    ]);

    // Create a new cart for user
    await pool.query("INSERT INTO carts(user_id) VALUES($1) ;", [req.user.id]);

    order.rows[0].items = cartItems;
    res.status(201).json({ order: order.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
