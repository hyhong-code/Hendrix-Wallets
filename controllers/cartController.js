const pool = require("../config/postgres");
const sendError = require("../utils/sendError");

/**
 * Returns given user's cart id
 * @function getCartId
 * @param {number} userId - user id from request
 * @returns {number} cartId - cart id of user
 */
const getCartId = async (userId) =>
  (await pool.query("SELECT * FROM carts WHERE user_id = $1 ;", [userId]))
    .rows[0].id;

/**
 * Helps find all cart items in user's cart
 * @function getCartItemsHelper
 * @param {number} cartId - id of user's cart
 * @returns {array} user's all cart items
 */
const getCartItemsHelper = async (cartId) =>
  (
    await pool.query(
      `SELECT cart_id, cart_items.id AS cart_item_id, quantity, item_id,
          name, description, price, discount
          FROM cart_items JOIN items ON item_id = items.id
          WHERE cart_id = $1 ;`,
      [cartId]
    )
  ).rows;

// @desc    Add an item to cart
// @route   POST /api/item/:itemId/cart/add
// @access  Private - User role
exports.addItemToCard = async (req, res, next) => {
  try {
    const item = await pool.query("SELECT * FROM items WHERE id = $1 ;", [
      req.params.itemId,
    ]);

    const cartId = await getCartId(req.user.id);

    // Check if item is already in the cart
    let cartItem = await pool.query(
      "SELECT * FROM cart_items WHERE cart_id = $1 AND item_id = $2",
      [cartId, item.rows[0].id]
    );

    // Put item into cart if its not already in the cart
    if (!cartItem.rows.length) {
      cartItem = await pool.query(
        "INSERT INTO cart_items(cart_id, item_id, quantity) VALUES($1, $2, $3) ;",
        [cartId, item.rows[0].id, 1]
      );
    } else {
      // Increase item quantity if it is already in the cart
      cartItem = await pool.query(
        "UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING * ;",
        [cartItem.rows[0].quantity + 1, cartItem.rows[0].id]
      );
    }

    const cartItems = await getCartItemsHelper(cartId);
    res.status(201).json({ cart: cartItems });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Remove an item to cart
// @route   DELETE /api/cart/
// @access  Private - User role
exports.removeItemFromCart = async (req, res, next) => {
  const { itemId, cartItemId } = req.body;
  if (!(itemId && cartItemId)) {
    return sendError(res, 400, {
      message: "itemId and cartItemId are required",
    });
  }

  try {
    const item = await pool.query("SELECT * FROM items WHERE id = $1 ;", [
      itemId,
    ]);

    // Check if item exist
    if (!item.rows.length) {
      return sendError(res, 404, {
        item: `Item with id ${req.params.itemId} not found`,
      });
    }

    const cartItem = await pool.query(
      "SELECT * FROM cart_items WHERE id = $1 ;",
      [cartItemId]
    );

    if (!cartItem.rows.length) {
      return sendError(res, 404, { message: "Cart item not found" });
    }

    if (cartItem.rows[0].quantity <= 1) {
      await pool.query("DELETE FROM cart_items WHERE id = $1 ;", [cartItemId]);
    } else {
      await pool.query("UPDATE cart_items SET quantity = $1 WHERE id = $2 ;", [
        cartItem.rows[0].quantity - 1,
        cartItem.rows[0].id,
      ]);
    }
    const cartId = await getCartId(req.user.id);
    const cartItems = await getCartItemsHelper(cartId);
    res.status(200).json({ cart: cartItems });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Get all cart items
// @route   GET /api/cart/
// @access  Private - User role
exports.getCartItems = async (req, res, next) => {
  try {
    const cartId = await getCartId(req.user.id);
    const cartItems = await getCartItemsHelper(cartId);
    res.status(200).json({ cart: cartItems });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
