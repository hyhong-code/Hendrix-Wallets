const express = require("express");

const { createCategory } = require("../controllers/categoryController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");
const itemRouter = require("./itemRouter");

const router = express.Router();

router.use("/:categoryId/item", itemRouter);

router.route("/").post(auth, limitTo("admin"), createCategory);

module.exports = router;
