const amqp = require("amqplib");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken");
const redis = require("../config/redisClient"); // ⬅ Redis bağlantısı eklendi

// 📨 RabbitMQ mesaj gönderme fonksiyonu
async function sendToQueue(message) {
  try {
    const connection = await amqp.connect("amqp://rabbitmq");
    const channel = await connection.createChannel();
    const queue = "user_notifications";

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`[x] Kuyruğa gönderildi: ${message}`);

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error("RabbitMQ hata:", error);
  }
}

// @desc    Yeni kullanıcı kaydı
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // 1. MongoDB'de e-posta kontrolü
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Bu e-posta adresi ile kayıtlı bir kullanıcı zaten var.");
  }

  // 2. Kullanıcı oluştur
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._1, user.isAdmin, user.isTrainer),
    });
  } else {
    res.status(400);
    throw new Error("Geçersiz kullanıcı verisi.");
  }
});



// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   // 1. Redis’ten kullanıcı kontrolü
//   const cached = await redis.get(`user:${email}`);
//   if (cached) {
//     res.status(409);
//     throw new Error("Bu e-posta adresi daha önce kullanılmış (cache).");
//   }

//   // 2. MongoDB'de kontrol
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     // Cache'e yazmayı da unutma
//     await redis.set(`user:${email}`, "1", "EX", 3600);
//     res.status(400);
//     throw new Error("Bu e-posta adresi ile kayıtlı bir kullanıcı zaten var.");
//   }

//   // 3. Kullanıcı oluştur
//   const user = await User.create({ name, email, password });

//   if (user) {
//     // Redis'e e-posta cache olarak ekleniyor
//     await redis.set(`user:${email}`, "1", "EX", 3600); // 1 saat geçerli

//     // RabbitMQ mesajı
//     await sendToQueue(`Yeni kullanıcı eklendi: ${user.name}`);

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id, user.isAdmin, user.isTrainer),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Geçersiz kullanıcı verisi.");
//   }
// });

// @desc    Kullanıcı girişi ve token alma
// @route   POST /api/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Geçersiz e-posta veya şifre.");
  }
});

module.exports = { registerUser, loginUser };
