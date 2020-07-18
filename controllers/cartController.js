const pool = require("../config/postgres");
const sendError = require("../utils/sendError");

const getCartItemsHelper = require("../utils/getCartItemsHelper");
const getUserCart = require("../utils/getUserCart");

// @desc    Add an item to cart
// @route   POST /api/item/:itemId/cart/add
// @access  Private - User role
exports.addItemToCard = async (req, res, next) => {
  try {
    const item = await pool.query("SELECT * FROM items WHERE id = $1 ;", [
      req.params.itemId,
    ]);

    const cart = await getUserCart(req.user.id);

    // Check if item is already in the cart
    let cartItem = await pool.query(
      "SELECT * FROM cart_items WHERE cart_id = $1 AND item_id = $2",
      [cart.id, item.rows[0].id]
    );

    // Put item into cart if its not already in the cart
    if (!cartItem.rows.length) {
      cartItem = await pool.query(
        "INSERT INTO cart_items(cart_id, item_id, quantity) VALUES($1, $2, $3) ;",
        [cart.id, item.rows[0].id, 1]
      );
    } else {
      // Increase item quantity if it is already in the cart
      cartItem = await pool.query(
        "UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING * ;",
        [cartItem.rows[0].quantity + 1, cartItem.rows[0].id]
      );
    }

    const cartItems = await getCartItemsHelper(cart.id);
    cart.cartItems = cartItems;
    res.status(201).json({ cart });
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
        message: `Item with id ${req.params.itemId} not found`,
      });
    }

    const cartItem = await pool.query(
      "SELECT * FROM cart_items WHERE id = $1 ;",
      [cartItemId]
    );

    if (!cartItem.rows.length) {
      return sendError(res, 404, { message: "Cart item not found" });
    }

    // Delete cart item if current quantity equals one
    if (cartItem.rows[0].quantity <= 1) {
      await pool.query("DELETE FROM cart_items WHERE id = $1 ;", [cartItemId]);
    } else {
      // Decrease cart item quantity if current quantity greater than 1
      await pool.query("UPDATE cart_items SET quantity = $1 WHERE id = $2 ;", [
        cartItem.rows[0].quantity - 1,
        cartItem.rows[0].id,
      ]);
    }
    const cart = await getUserCart(req.user.id);
    const cartItems = await getCartItemsHelper(cart.id);
    cart.cartItems = cartItems;
    res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};

// @desc    Get all cart items
// @route   GET /api/cart/
// @access  Private - User role
exports.getCart = async (req, res, next) => {
  try {
    const cart = await getUserCart(req.user.id);
    const cartItems = await getCartItemsHelper(cart.id);
    cart.cartItems = cartItems;
    res.status(200).json({ cart: cart });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
