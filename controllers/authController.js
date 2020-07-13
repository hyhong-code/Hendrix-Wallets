const pool = require("../config/postgres");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  checkRegister,
  sendErrorResponse,
} = require("../utils/validate/validateControl");

const sendServerError = (res) => {
  res.status(500).json({ errors: { server: "Server Error" } });
};

const sendJwtResponse = (user, statusCode, res) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(statusCode).json({ token });
};

exports.register = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;

    const { isValid, errors } = checkRegister(email, name, password);
    if (!isValid) return sendErrorResponse(res, errors);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await pool.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING * ;",
      [email, name, hashedPassword]
    );

    sendJwtResponse(user.rows[0], 201, res);
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      return sendErrorResponse(res, { email: "Email already in use" });
    } else {
      sendServerError(res);
    }
  }
};
