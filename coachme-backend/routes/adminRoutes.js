const express = require("express");
const router = express.Router();
const {
  makeTrainer,
  removeTrainer,
  createProgram,
  updateProgram,
  deleteProgram,
  getTrainerApplications,
} = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

// Tüm admin rotaları hem protect hem de admin middleware'inden geçmeli
router.put("/users/:id/make-trainer", protect, admin, makeTrainer); // Çalışıyor.
router.delete("/users/:id/remove-trainer", protect, admin, removeTrainer); // Çalışıyor.

router.route("/programs").post(protect, admin, createProgram); // Çalışıyor.
router
  .route("/programs/:id")
  .put(protect, admin, updateProgram) // Çalışıyor.
  .delete(protect, admin, deleteProgram); // Çalışıyor.

router.get("/applications", protect, admin, getTrainerApplications);

module.exports = router;
