const express = require("express");

const { register } = require("../controllers/authController");

const router = express.Router();

router.route("/register").post(register);

module.exports = router;
