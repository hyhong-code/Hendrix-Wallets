const express = require("express");

const {
  register,
  login,
  loadMe,
  auth,
} = require("../controllers/authController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/loadme").get(auth, loadMe);

module.exports = router;
