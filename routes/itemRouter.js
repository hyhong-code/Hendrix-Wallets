const express = require("express");

const { getItems, createItem } = require("../controllers/itemController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");
const cartRouter = require("../routes/cartRouter");

const router = express.Router({ mergeParams: true });

router.use("/:itemId/cart", cartRouter);

router.route("/").get(getItems).post(auth, limitTo("admin"), createItem);

module.exports = router;
