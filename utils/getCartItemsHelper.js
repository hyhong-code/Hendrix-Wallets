const pool = require("../config/postgres");

/**
 * Helps find all cart items in user's cart
 * @function getCartItemsHelper
 * @param {number} cartId - id of user's cart
 * @returns {array} user's all cart items
 */
module.exports = async (cartId) =>
  (
    await pool.query(
      `SELECT cart_id, cart_items.id AS cart_item_id, quantity, item_id,
          name, description, price, discount, photo
          FROM cart_items JOIN items ON item_id = items.id
          WHERE cart_id = $1 ;`,
      [cartId]
    )
  ).rows;
