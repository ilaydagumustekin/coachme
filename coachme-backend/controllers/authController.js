const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken"); // Bu dosyayı aşağıda oluşturacağız

// @desc    Yeni kullanıcı kaydı
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Bu e-posta adresi ile kayıtlı bir kullanıcı zaten var.");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, user.isAdmin, user.isTrainer),
    });
  } else {
    res.status(400);
    throw new Error("Geçersiz kullanıcı verisi.");
  }
});

// @desc    Kullanıcı girişi ve token alma
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Geçersiz e-posta veya şifre.");
  }
});

// Çıkış Yap işlemi genellikle client-side'da token'ı silerek yapılır.
// Backend'de bir logout endpoint'i (token'ı karalisteye almak gibi) daha karmaşık sistemler için kurulabilir.

module.exports = { registerUser, loginUser };
