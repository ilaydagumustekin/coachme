const mongoose = require("mongoose");

const programSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ["Başlangıç", "Orta Seviye", "İleri Seviye"],
    },
    duration: {
      // Dakika cinsinden
      type: Number,
      required: true,
    },
    weeks: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    plan: [
      {
        week: Number,
        day: Number,
        exercise: String,
        sets: String,
        reps: String,
        notes: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);
module.exports = Program;
