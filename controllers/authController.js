const pool = require("../config/postgres");
const bcrypt = require("bcryptjs");

const {
  checkRegister,
  sendErrorResponse,
} = require("../utils/validate/validateControl");

exports.register = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;

    const { isValid, errors } = checkRegister(email, name, password);

    if (!isValid) return sendErrorResponse(res, errors);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await pool.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3);",
      [email, name, hashedPassword]
    );

    res.status(201).json({ user: user.rows[0] });
  } catch (error) {
    console.log(error);
  }
};
