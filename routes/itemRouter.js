const express = require("express");

const { createItem } = require("../controllers/itemController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router({ mergeParams: true });

router.route("/").post(auth, limitTo("admin"), createItem);

module.exports = router;
