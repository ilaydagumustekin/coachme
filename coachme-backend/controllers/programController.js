const asyncHandler = require("express-async-handler");
const Program = require("../models/programModel.js");

// @desc    Tüm programları getir
// @route   GET /api/programs
// @access  Public
const getPrograms = asyncHandler(async (req, res) => {
  const programs = await Program.find({});
  res.json(programs);
});

// @desc    Tek bir programı getir
// @route   GET /api/programs/:id
// @access  Public
const getProgramById = asyncHandler(async (req, res) => {
  const program = await Program.findById(req.params.id);

  if (program) {
    res.json(program);
  } else {
    res.status(404);
    throw new Error("Program bulunamadı.");
  }
});

module.exports = { getPrograms, getProgramById };
