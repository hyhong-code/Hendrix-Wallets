const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const { checkCategory } = require("../utils/validate/validateControl");

// @desc    Create a item category
// @route   POST /api/category
// @access  Admin role
exports.createCategory = async (req, res, next) => {
  const { name, description } = req.body;
  const { isValid, errors } = checkCategory(name, description);
  if (!isValid) return sendError(res, 400, errors);
  try {
    const category = await pool.query(
      `INSERT INTO item_categories(name, description)
        VALUES($1, $2) RETURNING * ;`,
      [name, description]
    );

    res.status(201).json({ category: category.rows[0] });
  } catch (error) {
    console.error(error);
    if (
      error.code === "23505" &&
      error.constraint === "item_categories_name_key"
    ) {
      return sendError(res, 400, { name: "Category name already exists" });
    }
    sendError(res);
  }
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
