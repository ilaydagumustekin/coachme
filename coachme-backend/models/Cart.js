import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program", // Program modelini referans alıyor
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
