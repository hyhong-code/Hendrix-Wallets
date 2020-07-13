const express = require("express");

const { createCategory } = require("../controllers/categoryController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router();

router.route("/").post(auth, limitTo("admin"), createCategory);

module.exports = router;
