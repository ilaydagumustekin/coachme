const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Redis kontrolü controller içinde yapılmaktadır.
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
