const bcrypt = require("bcryptjs");

const pool = require("../config/postgres");
const {
  checkRegister,
  checkLogin,
} = require("../utils/validate/validateControl");
const sendError = require("../utils/sendError");
const sendJwtToken = require("../utils/sendJwtToken");

// @desc    Register a user
// @route   POST /api/auth/register
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
    await pool.query("INSERT INTO profiles(user_id) VALUES($1);", [
      user.rows[0].id,
    ]);
    await pool.query("INSERT INTO carts(user_id) VALUES($1);", [
      user.rows[0].id,
    ]);
    sendJwtToken(user.rows[0], 201, res);
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      return sendError(res, 400, { message: "Email already in use" });
    } else {
      sendError(res);
    }
  }
};

// @desc    Log in a user
// @route   POST /api/auth/login
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
        message: `No user found with email ${email}`,
      });
    }
    if (!(await bcrypt.compare(password, user.rows[0].password))) {
      return sendError(res, 401, {
        message: `Invalid credentials`,
      });
    }

    sendJwtToken(user.rows[0], 200, res);
  } catch (error) {
    sendError(res);
  }
};

// @desc    Load current logged in user
// @route   GET /api/auth/loadme
// @access  Private
exports.loadMe = async (req, res, next) => {
  try {
    const user = await pool.query(
      `SELECT users.id, name, role, email, photo, phone, address, carts.id AS cart_id FROM users
       JOIN profiles ON users.id = profiles.user_id
       JOIN carts ON users.id = carts.user_id
       WHERE users.id = $1 ;`,
      [req.user.id]
    );
    res.json({ user: user.rows[0] });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
