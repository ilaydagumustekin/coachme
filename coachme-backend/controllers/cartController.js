const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const Program = require("../models/programModel.js");

// @desc    Sepete program ekle
// @route   POST /api/users/cart/add
// @access  Private
const addToCart = asyncHandler(async (req, res) => {
  const { programId } = req.body;

  const user = await User.findById(req.user._id);
  const program = await Program.findById(programId);

  if (!program) {
    res.status(404);
    throw new Error("Program bulunamadı.");
  }

  // Sepette veya satın alınanlarda olup olmadığını kontrol et
  if (
    user.cart.includes(programId) ||
    user.purchasedPrograms.includes(programId)
  ) {
    res.status(400);
    throw new Error("Bu program zaten sepetinizde veya satın alınmış.");
  }

  user.cart.push(programId);
  await user.save();

  res.status(200).json({ message: "Program sepete eklendi." });
});

// @desc    Sepetten program sil
// @route   DELETE /api/users/cart/remove
// @access  Private
const removeFromCart = asyncHandler(async (req, res) => {
  const { programId } = req.body;

  const user = await User.findById(req.user._id);

  user.cart.pull(programId);
  await user.save();

  res.status(200).json({ message: "Program sepetten kaldırıldı." });
});

// @desc    Ödeme yap ve programları satın al
// @route   POST /api/users/cart/checkout
// @access  Private
const checkout = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("cart");

  if (!user.cart || user.cart.length === 0) {
    res.status(400);
    throw new Error("Sepetiniz boş.");
  }

  // Burası normalde bir ödeme API'si (Stripe, Iyzico vb.) ile entegre olur.
  // Şimdilik basitçe sepeti satın alınanlara taşıyoruz.
  const paymentSuccessful = true; // Simülasyon

  if (paymentSuccessful) {
    user.purchasedPrograms.push(...user.cart.map((item) => item._id));
    user.cart = []; // Sepeti boşalt
    await user.save();

    res
      .status(200)
      .json({ message: "Ödeme başarılı. Programlar hesabınıza eklendi." });
  } else {
    res.status(400);
    throw new Error("Ödeme sırasında bir hata oluştu.");
  }
});

module.exports = { addToCart, removeFromCart, checkout };
