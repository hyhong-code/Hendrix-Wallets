const express = require("express");

const {
  getItems,
  createItem,
  updateItem,
} = require("../controllers/itemController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");
const cartRouter = require("../routes/cartRouter");

const router = express.Router({ mergeParams: true });

router.use("/:itemId/cart", cartRouter);

router.route("/").get(getItems).post(auth, limitTo("admin"), createItem);
router.route("/:itemId").patch(updateItem);

module.exports = router;
