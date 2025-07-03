const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    user: {
      // Yorumu yapan kullanıcı
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    trainer: {
      // Yorum yapılan eğitmen
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
