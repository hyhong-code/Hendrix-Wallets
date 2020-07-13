const express = require("express");

const { createOrder } = require("../controllers/orderController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router();

router.route("/").post(auth, limitTo("user"), createOrder);

module.exports = router;
