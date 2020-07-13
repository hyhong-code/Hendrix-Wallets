const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const { checkItem } = require("../utils/validate/validateControl");

// @desc    Create a item
// @route   POST /api/category/:categoryId/item
// @access  Admin role
exports.createItem = async (req, res, next) => {
  const { name, description, price, discount } = req.body;
  const { isValid, errors } = checkItem(name, description, price, discount);
  if (!isValid) return sendError(res, 400, errors);
  try {
    const category = await pool.query(
      "SELECT * FROM item_categories WHERE id = $1 ;",
      [req.params.categoryId]
    );

    if (!category.rows.length) {
      return sendError(res, 404, {
        category: `Category with id ${req.params.categoryId} not found.`,
      });
    }
    const item = await pool.query(
      `INSERT INTO items(category_id, name, description, price, discount)
       VALUES($1, $2, $3, $4, COALESCE($5, 0)) RETURNING * ;`,
      [req.params.categoryId, name, description, price, discount]
    );

    item.rows[0].category_name = category.rows[0].name;
    item.rows[0].category_description = category.rows[0].description;

    res.status(201).json({ item: item.rows[0] });
  } catch (error) {
    console.error(error);
    if (error.code === "22P02") {
      sendError(res, 400, {
        category: `Category id ${req.params.categoryId} is invalid`,
      });
    }
  }
};
