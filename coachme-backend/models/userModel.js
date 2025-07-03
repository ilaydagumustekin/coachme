const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Lütfen isminizi girin."] },
    email: {
      type: String,
      required: [true, "Lütfen e-posta adresinizi girin."],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Lütfen geçerli bir e-posta adresi girin.",
      ],
    },
    password: {
      type: String,
      required: [true, "Lütfen şifrenizi girin."],
      minlength: 6,
    },
    isTrainer: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false },

    specialty: { type: String, default: "" }, // Uzmanlık alanı
    bio: { type: String, default: "" }, // Biyografi
    experience: { type: Number, default: 0 }, // Tecrübe yılı

    profile: {
      height: { type: Number, default: 0 }, // cm
      weight: { type: Number, default: 0 }, // kg
      measurements: {
        chest: { type: Number, default: 0 }, // cm
        waist: { type: Number, default: 0 }, // cm
        hip: { type: Number, default: 0 }, // cm
      },
      medicalHistory: [{ type: String }],
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
    purchasedPrograms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// VKİ (Vücut Kitle İndeksi) hesaplaması için sanal alan
userSchema.virtual("vki").get(function () {
  if (this.profile && this.profile.height > 0 && this.profile.weight > 0) {
    const heightInMeters = this.profile.height / 100;
    return (this.profile.weight / (heightInMeters * heightInMeters)).toFixed(2);
  }
  return null;
});

// Kullanıcı kaydedilmeden önce şifreyi hash'le
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Girilen şifre ile veritabanındaki hash'lenmiş şifreyi karşılaştır
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
