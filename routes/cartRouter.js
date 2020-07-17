const express = require("express");

const {
  addItemToCard,
  removeItemFromCart,
  getCart,
} = require("../controllers/cartController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(auth, limitTo("user"), getCart)
  .post(auth, limitTo("user"), addItemToCard)
  .delete(auth, limitTo("user"), removeItemFromCart);

module.exports = router;
