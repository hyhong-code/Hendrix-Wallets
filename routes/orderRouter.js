const express = require("express");

const {
  createOrder,
  getOrders,
  getOrderDetailsById,
} = require("../controllers/orderController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router();

router
  .route("/")
  .get(auth, limitTo("user"), getOrders)
  .post(auth, limitTo("user"), createOrder);
router.route("/:orderId").get(auth, limitTo("user"), getOrderDetailsById);

module.exports = router;
