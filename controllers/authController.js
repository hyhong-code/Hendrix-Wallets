const pool = require("../config/postgres");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  checkRegister,
  checkLogin,
} = require("../utils/validate/validateControl");

const sendError = (
  res,
  statusCode = 500,
  errors = { server: "Something went wrong" }
) => {
  res.status(statusCode).json({ errors });
};

const sendJwtResponse = (user, statusCode, res) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(statusCode).json({ token });
};

// @desc    Register a user
// @route   /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    const { isValid, errors } = checkRegister(email, name, password);
    if (!isValid) return sendError(res, 400, errors);

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await pool.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING * ;",
      [email, name, hashedPassword]
    );
    sendJwtResponse(user.rows[0], 201, res);
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      return sendError(res, 400, { email: "Email already in use" });
    } else {
      sendError(res);
    }
  }
};

// @desc    Register a user
// @route   /api/auth/register
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { isValid, errors } = checkLogin(email, password);
    if (!isValid) return sendError(res, 400, errors);

    const user = await pool.query("SELECT * FROM users WHERE email = $1 ;", [
      email,
    ]);
    if (!user.rows.length) {
      return sendError(res, 404, {
        email: `No user found with email ${email}`,
      });
    }
    if (!(await bcrypt.compare(password, user.rows[0].password))) {
      return sendError(res, 401, {
        password: `Invalid credentials`,
      });
    }

    sendJwtResponse(user.rows[0], 200, res);
  } catch (error) {
    sendError(res);
  }
};
