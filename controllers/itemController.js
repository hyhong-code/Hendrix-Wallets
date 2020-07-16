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
    if (error.code === "23505" && error.constraint === "items_name_key") {
      sendError(res, 400, { message: "Item name already exists" });
    }
  }
};

// @desc    Create a item
// @route   POST /api/category/:categoryId/item
// @access  Admin role
exports.getItems = async (req, res, next) => {
  try {
    const items = await pool.query(
      `SELECT items.id, items.name, items.description, items.category_id, items.photo, items.price,
       items.discount, items.created_at, item_categories.name AS category_name
       FROM items JOIN item_categories
       ON items.category_id = item_categories.id ;
      `
    );
    res.status(200).json({ items: items.rows });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
