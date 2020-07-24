const aws = require("aws-sdk");

const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const { checkCategory } = require("../utils/validate/validateControl");

// AWS config
aws.config.update({
  region: "us-west-2",
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});
const S3_BUCKET = process.env.Bucket;

// @desc    Create a item category
// @route   POST /api/category
// @access  Admin role
exports.createCategory = async (req, res, next) => {
  const { fileName, fileType, name, description } = req.body;
  const { isValid, errors } = checkCategory(name, description);
  if (!isValid) return sendError(res, 400, errors);

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
    // Get signed request and url for upload from s3
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };
    const { signedRequest, url } = returnData;

    try {
      // Insert name and description to DB
      const category = await pool.query(
        `INSERT INTO item_categories(name, description, photo)
          VALUES($1, $2, $3) RETURNING * ;`,
        [name, description, url]
      );

      // Return newly created category, as well as info needed to actually upload to s3
      res.status(201).json({ signedRequest, url, category: category.rows[0] });
    } catch (error) {
      console.error(error);
      if (
        error.code === "23505" &&
        error.constraint === "item_categories_name_key"
      ) {
        return sendError(res, 400, { message: "Category name already exists" });
      }
      sendError(res);
    }
  });
};

// @desc    Get all categories
// @route   GET /api/category
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await pool.query("SELECT * FROM item_categories ;");
    res.status(200).json({ categories: categories.rows });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
