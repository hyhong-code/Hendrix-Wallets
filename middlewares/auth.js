const jwt = require("jsonwebtoken");
const pool = require("../config/postgres");

const sendError = require("../utils/sendError");

module.exports = auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return sendError(res, 401, { auth: "No token, please login" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return sendError(res, 401, { auth: "Invalid token, please login" });
  }

  try {
    const user = await pool.query(
      `SELECT users.id, name, photo FROM users 
         JOIN profiles ON users.id = profiles.user_id 
         WHERE users.id = $1 ;`,
      [decoded.id]
    );

    if (!user.rows.length) {
      return sendError(res, 404, { auth: "User not found" });
    }

    req.user = user.rows[0];
    next();
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
