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
    await pool.query("INSERT INTO profiles(user_id) VALUES($1);", [
      user.rows[0].id,
    ]);
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

// @desc    Log in a user
// @route   /api/auth/login
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

exports.auth = async (req, res, next) => {
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
  }
};

// @desc    Load current logged in user
// @route   /api/auth/loadme
// @access  Private
exports.loadMe = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};
