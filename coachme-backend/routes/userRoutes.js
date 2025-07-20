const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  updateUserProfile,
  getTrainers,
  createTrainerReview,
  applyForTrainer,
} = require("../controllers/userController");
const {
  addToCart,
  removeFromCart,
  checkout,
} = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

// Profil Rotaları (Korumalı)
router
  .route("/profile")
  .get(protect, getUserProfile) // Çalışıyor.
  .put(protect, updateUserProfile); // Çalışıyor.

// Sepet Rotaları (Korumalı)
// router.post("/cart/add", protect, addToCart);
// router.delete("/cart/remove", protect, removeFromCart);
// router.post("/cart/checkout", protect, checkout);

// Eğitmen Rotaları
router.get("/trainers", getTrainers); // Çalışıyor.
router.post("/trainers/:id/reviews", protect, createTrainerReview); // Çalışıyor.
router.post("/apply-trainer", applyForTrainer);
router.get("/users/trainers", getTrainers);


module.exports = router;
