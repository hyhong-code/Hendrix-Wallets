const express = require("express");

const { updateProfile } = require("../controllers/profileController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/").patch(auth, updateProfile);

module.exports = router;
