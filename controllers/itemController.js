const aws = require("aws-sdk");

const pool = require("../config/postgres");
const sendError = require("../utils/sendError");
const { checkItem } = require("../utils/validate/validateControl");
const nullifyEmptyStr = require("../utils/nullifyEmptyStr");

aws.config.update({
  region: "us-west-2",
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});
const S3_BUCKET = process.env.Bucket;

// @desc    Create a item
// @route   POST /api/category/:categoryId/item
// @access  Admin role
exports.createItem = async (req, res, next) => {
  const { fileName, fileType, name, description, price, discount } = req.body;
  const { isValid, errors } = checkItem(name, description, price, discount);
  if (!isValid) return sendError(res, 400, errors);

  if (!(fileName && fileType) || !fileType.startsWith("image")) {
    return sendError(res, 400, {
      message: "Please upload a valid image file for the product",
    });
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

    try {
      const category = await pool.query(
        "SELECT * FROM item_categories WHERE id = $1 ;",
        [req.params.categoryId]
      );

      if (!category.rows.length) {
        return sendError(res, 404, {
          message: `Category with id ${req.params.categoryId} not found.`,
        });
      }
      const item = await pool.query(
        `INSERT INTO items(category_id, name, description, price, discount, photo)
         VALUES($1, $2, $3, $4, COALESCE($5, 0), $6) RETURNING * ;`,
        [req.params.categoryId, name, description, price, discount, url]
      );

      item.rows[0].category_name = category.rows[0].name;
      item.rows[0].category_description = category.rows[0].description;

      res.status(201).json({ signedRequest, url, item: item.rows[0] });
    } catch (error) {
      console.error(error);
      if (error.code === "23505" && error.constraint === "items_name_key") {
        sendError(res, 400, { message: "Item name already exists" });
      }
    }
  });
};

// @desc    Update an item
// @route   PATCH /api/category/:categoryId
// @access  Private Admin role
exports.updateItem = async (req, res, next) => {
  const { name, description, price } = req.body;
  let { discount } = req.body;
  if (discount === "") discount = 0;
  const { isValid, errors } = checkItem(name, description, price, discount);
  if (!isValid) return sendError(res, 400, errors);

  try {
    const item = await pool.query(
      `UPDATE items SET
       name = $1,
       description = $2,
       price = $3,
       discount = COALESCE($4, discount)
       WHERE id = $5 RETURNING * ;`,
      [name, description, price, discount, req.params.itemId]
    );

    const category = await pool.query(
      "SELECT * FROM item_categories WHERE id = $1 ;",
      [item.rows[0].category_id]
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

// @desc    Get all items
// @route   GET /api/item
// @access  Public
exports.getItems = async (req, res, next) => {
  let {
    name,
    description,
    category,
    price_MT,
    price_LT,
    sort,
    limit,
  } = req.query;

  name = nullifyEmptyStr(name);
  description = nullifyEmptyStr(description);
  category = nullifyEmptyStr(category);
  price_LT = nullifyEmptyStr(price_LT);
  price_MT = nullifyEmptyStr(price_MT);
  sortField = nullifyEmptyStr(sort ? sort.split("-")[0] : "");
  sortOrder = nullifyEmptyStr(sort ? sort.split("-")[1] : "");
  limit = nullifyEmptyStr(limit);

  let orderBy;
  if (sortOrder && sortField) {
    orderBy = `ORDER BY ${sortField} ${sortOrder}`;
  } else {
    orderBy = `ORDER BY created_at DESC`;
  }

  let price = "";
  if (price_LT) {
    price += `AND price < ${price_LT * 100} `;
  }
  if (price_MT) {
    price += `AND price > ${price_MT * 100} `;
  }

  console.log(name, description, category, price, orderBy, limit);

  try {
    const items = await pool.query(
      `SELECT items.id, items.name, items.description, items.category_id, items.photo, items.price,
       items.discount, items.created_at, item_categories.name AS category_name
       FROM items JOIN item_categories
       ON items.category_id = item_categories.id
       WHERE items.name ILIKE '%' || COALESCE($1, items.name) || '%'
       AND items.description ILIKE '%' || COALESCE($2, items.description) || '%'
       AND items.category_id = COALESCE($3, items.category_id)
       ${price}
       ${orderBy}
       LIMIT COALESCE($4, 500)
       ; `,
      [name, description, category, limit]
    );
    res.status(200).json({ items: items.rows });
  } catch (error) {
    console.error(error);
    sendError(res);
  }
};
