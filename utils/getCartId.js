const pool = require("../config/postgres");

/**
 * Returns given user's cart id
 * @function getCartId
 * @param {number} userId - user id from request
 * @returns {number} cartId - cart id of user
 */
module.exports = async (userId) =>
  (
    await pool.query(
      "SELECT * FROM carts WHERE user_id = $1 AND is_order = FALSE;",
      [userId]
    )
  ).rows[0].id;
