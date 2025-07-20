const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const Review = require("../models/reviewModel.js");
const TrainerApplication = require("../models/trainerApplicationModel.js");
const generateToken = require("../utils/generateToken.js");

// @desc    Kullanıcı profilini getir
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isTrainer: user.isTrainer,
      profile: user.profile,
      vki: user.vki,
    });
  } else {
    res.status(404);
    throw new Error("Kullanıcı bulunamadı.");
  }
});

// @desc    Kullanıcı profilini güncelle
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    // Profil bilgileri
    const profileData = req.body.profile || {};
    user.profile.height = profileData.height || user.profile.height;
    user.profile.weight = profileData.weight || user.profile.weight;
    user.profile.medicalHistory =
      profileData.medicalHistory || user.profile.medicalHistory;

    const measurementsData = profileData.measurements || {};
    user.profile.measurements.chest =
      measurementsData.chest || user.profile.measurements.chest;
    user.profile.measurements.waist =
      measurementsData.waist || user.profile.measurements.waist;
    user.profile.measurements.hip =
      measurementsData.hip || user.profile.measurements.hip;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isTrainer: updatedUser.isTrainer,
      profile: updatedUser.profile,
      vki: updatedUser.vki,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("Kullanıcı bulunamadı.");
  }
});

// ✅ YENİLENMİŞ - Eğitmenleri detaylıca getir
// @desc    Tüm eğitmenleri listele (name, bio, specialty, experience vs.)
// @route   GET /api/users/trainers
// @access  Public
const getTrainers = asyncHandler(async (req, res) => {
  const trainers = await User.find({ isTrainer: true }).select(
    "_id name email bio specialty experience"
  );
  res.json(trainers);
});

// @desc    Eğitmene yorum yap
// @route   POST /api/users/trainers/:id/reviews
// @access  Private
const createTrainerReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const trainer = await User.findById(req.params.id);

  if (!trainer || !trainer.isTrainer) {
    res.status(404);
    throw new Error("Eğitmen bulunamadı.");
  }

  const alreadyReviewed = await Review.findOne({
    user: req.user._id,
    trainer: req.params.id,
  });

  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Bu eğitmene zaten yorum yapmışsınız.");
  }

  const review = new Review({
    user: req.user._id,
    trainer: req.params.id,
    rating,
    comment,
  });

  await review.save();
  res.status(201).json({ message: "Yorum başarıyla eklendi." });
});

// @desc    Eğitmen başvurusu gönder
// @route   POST /api/users/apply-trainer
// @access  Public
const applyForTrainer = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error("Lütfen tüm alanları doldurun.");
  }

  const application = new TrainerApplication({
    name,
    email,
    message,
  });

  await application.save();

  res.status(201).json({
    message:
      "Başvurunuz alınmıştır. En kısa sürede size geri dönüş yapılacaktır.",
  });
});

module.exports = {
  getUserProfile,
  updateUserProfile,
  getTrainers,
  createTrainerReview,
  applyForTrainer,
};
