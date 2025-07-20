const mongoose = require("mongoose");

const trainerApplicationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      // Deneyim, sertifikalar vb. bilgiler
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["beklemede", "onaylandı", "reddedildi"],
      default: "beklemede",
    },
  },
  {
    timestamps: true,
  }
);

const TrainerApplication = mongoose.model(
  "TrainerApplication",
  trainerApplicationSchema
);
module.exports = TrainerApplication;
