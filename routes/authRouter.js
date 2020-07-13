const express = require("express");

const { register, login, loadMe } = require("../controllers/authController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/loadme").get(auth, loadMe);

module.exports = router;
