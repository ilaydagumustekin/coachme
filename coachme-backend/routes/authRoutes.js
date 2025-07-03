const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser); // Çalışıyor.
router.post("/login", loginUser); // Çalışıyor.

module.exports = router;
