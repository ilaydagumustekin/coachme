const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Token'ı header'dan al ('Bearer ' kısmını atla)
      token = req.headers.authorization.split(" ")[1];

      // Token'ı doğrula
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Kullanıcıyı bul ve req objesine ekle (şifre hariç)
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Yetkisiz erişim, token geçersiz.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Yetkisiz erişim, token bulunamadı.");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Yetkisiz erişim. Sadece adminler bu işlemi yapabilir.");
  }
};

module.exports = { protect, admin };
