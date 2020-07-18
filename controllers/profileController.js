const aws = require("aws-sdk");

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
    const profile = await pool.query(
      `UPDATE profiles SET
        phone = COALESCE($1, phone),
        address = COALESCE($2, address)
        WHERE user_id = $3 RETURNING photo, phone, address ;`,
      [nullifyEmptyStr(phone), nullifyEmptyStr(address), req.user.id]
    );

    const user = await pool.query(
      `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email)
        WHERE id = $3 RETURNING id, email, name ;`,
      [nullifyEmptyStr(name), nullifyEmptyStr(email), req.user.id]
    );

    res.status(200).json({ profile: { ...user.rows[0], ...profile.rows[0] } });
  } catch (error) {
    console.error(error);
    if (error.code === "23505" && error.constraint === "users_email_key") {
      return sendError(res, 400, { message: `${email} is already used` });
    }
    sendError(res);
  }
};

aws.config.update({
  region: "us-west-2",
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});
const S3_BUCKET = process.env.Bucket;

// @desc    Update current logged in user's profile photo
// @route   PATCH /api/profile/photo
// @access  Private
exports.updateProfilePic = (req, res) => {
  const { fileName, fileType } = req.body;

  if (!(fileName && fileType) || !fileType.startsWith("image")) {
    return sendError(res, 400, { message: "Please upload a valid image file" });
  }

  const s3 = new aws.S3();
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, async (err, data) => {
    if (err) {
      console.error(err);
      return sendError(res);
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    const { signedRequest, url } = returnData;

    await pool.query(
      `UPDATE profiles SET
        photo = $1
        WHERE user_id = $2 ;`,
      [url, req.user.id]
    );

    res.status(200).json({ signedRequest, url });
  });
};
