const jwt = require("jsonwebtoken");

/**
 * Signs and responses with a jwt token with given user's id as payload
 * @function sendJwtToken
 * @param {object} user - user object from database
 * @param {number} statusCode - status code to send along with response
 * @param {object} res - express response object
 */
module.exports = (user, statusCode, res) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(statusCode).json({ token });
};
