const express = require("express");

const {
  register,
  login,
  loadMe,
  adminLogin,
} = require("../controllers/authController");
const auth = require("../middlewares/auth");
const limitTo = require("../middlewares/limitTo");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/login/admin").post(adminLogin);
router.route("/loadme").get(auth, loadMe);

module.exports = router;
