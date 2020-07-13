const express = require("express");

const {
  addItemToCard,
  removeItemFromCart,
  getCartItems,
} = require("../controllers/cartController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(auth, limitTo("user"), getCartItems)
  .post(auth, limitTo("user"), addItemToCard)
  .delete(auth, limitTo("user"), removeItemFromCart);

module.exports = router;
