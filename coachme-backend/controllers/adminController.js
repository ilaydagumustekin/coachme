const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const Program = require("../models/programModel.js");
const TrainerApplication = require("../models/trainerApplicationModel");

// @desc    Bir kullanıcıyı eğitmen yap
// @route   PUT /api/admin/users/:id/make-trainer
// @access  Private/Admin
const makeTrainer = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isTrainer = true;

    // İstekten gelen yeni alanlar
    if (req.body.specialty !== undefined) user.specialty = req.body.specialty;
    if (req.body.bio !== undefined) user.bio = req.body.bio;
    if (req.body.experience !== undefined)
      user.experience = req.body.experience;

    const updatedUser = await user.save();
    res.json({
      message: `${updatedUser.name} artık bir eğitmen.`,
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        isTrainer: updatedUser.isTrainer,
        specialty: updatedUser.specialty,
        bio: updatedUser.bio,
        experience: updatedUser.experience,
      },
    });
  } else {
    res.status(404);
    throw new Error("Kullanıcı bulunamadı.");
  }
});

// @desc    Bir eğitmenin yetkisini al
// @route   PUT /api/admin/users/:id/remove-trainer
// @access  Private/Admin
const removeTrainer = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.isTrainer = false;
    const updatedUser = await user.save();
    res.json({ message: `${updatedUser.name} artık bir eğitmen değil.` });
  } else {
    res.status(404);
    throw new Error("Kullanıcı bulunamadı.");
  }
});

// @desc    Yeni bir program oluştur (yükle)
// @route   POST /api/admin/programs
// @access  Private/Admin
const createProgram = asyncHandler(async (req, res) => {
  const { name, description, difficulty, duration, weeks, plan, price } =
    req.body;

  const program = new Program({
    name,
    description,
    difficulty,
    duration,
    weeks,
    plan,
    price,
  });

  const createdProgram = await program.save();
  res.status(201).json(createdProgram);
});

// @desc    Bir programı güncelle
// @route   PUT /api/admin/programs/:id
// @access  Private/Admin
const updateProgram = asyncHandler(async (req, res) => {
  const { name, description, difficulty, duration, weeks, plan, price } =
    req.body;

  const program = await Program.findById(req.params.id);

  if (program) {
    program.name = name || program.name;
    program.description = description || program.description;
    program.difficulty = difficulty || program.difficulty;
    program.duration = duration || program.duration;
    program.weeks = weeks || program.weeks;
    program.plan = plan || program.plan;
    program.price = price || program.price;

    const updatedProgram = await program.save();
    res.json(updatedProgram);
  } else {
    res.status(404);
    throw new Error("Program bulunamadı.");
  }
});

// @desc    Bir programı sil
// @route   DELETE /api/admin/programs/:id
// @access  Private/Admin
const deleteProgram = asyncHandler(async (req, res) => {
  const program = await Program.findById(req.params.id);

  if (program) {
    await program.deleteOne(); // veya .remove()
    res.json({ message: "Program başarıyla silindi." });
  } else {
    res.status(404);
    throw new Error("Program bulunamadı.");
  }
});

// @desc    Tüm eğitmen başvurularını getir
// @route   GET /api/admin/applications
// @access  Private/Admin
const getTrainerApplications = asyncHandler(async (req, res) => {
  const applications = await TrainerApplication.find({});
  res.json(applications);
});

module.exports = {
  makeTrainer,
  removeTrainer,
  createProgram,
  updateProgram,
  deleteProgram,
  getTrainerApplications,
};
