const express = require("express");

const {
  updateProfile,
  updateProfilePic,
} = require("../controllers/profileController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/").patch(auth, updateProfile);
router.route("/photo").patch(auth, updateProfilePic);

module.exports = router;
