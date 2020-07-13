const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const { checkProfile } = require("../utils/validate/validateControl");
const nullifyEmptyStr = require("../utils/nullifyEmptyStr");

// @desc    Update current logged in user's profile
// @route   PATCH /api/profile
// @access  Private
exports.updateProfile = async (req, res, next) => {
  let { phone, address, email, name } = req.body;
  const { isValid, errors } = checkProfile(phone, email, name);
  if (!isValid) return sendError(res, 400, errors);
  try {
    const user = await pool.query(
      `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email)
        WHERE id = $3 RETURNING id, email, name ;`,
      [nullifyEmptyStr(name), nullifyEmptyStr(email), req.user.id]
    );

    const profile = await pool.query(
      `UPDATE profiles SET
        phone = COALESCE(phone, $1),
        address = COALESCE(address, $2)
        WHERE user_id = $3 RETURNING photo, phone, address ;`,
      [nullifyEmptyStr(phone), nullifyEmptyStr(address), req.user.id]
    );

    res.status(200).json({ profile: { ...user.rows[0], ...profile.rows[0] } });
  } catch (error) {
    console.error(error);
    if (error.code === "23505" && error.constraint === "users_email_key") {
      return sendError(res, 400, { email: `${email} is already used` });
    }
    sendError(res);
  }
};
