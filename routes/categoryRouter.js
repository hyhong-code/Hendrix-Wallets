const express = require("express");

const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");
const itemRouter = require("./itemRouter");

const router = express.Router();

router.use("/:categoryId/item", itemRouter);

router
  .route("/")
  .get(getCategories)
  .post(auth, limitTo("admin"), createCategory);

module.exports = router;
