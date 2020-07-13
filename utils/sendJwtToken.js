const jwt = require("jsonwebtoken");

module.exports = (user, statusCode, res) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(statusCode).json({ token });
};
