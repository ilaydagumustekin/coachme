// middleware/checkEmailCache.js
const redis = require("../config/redisClient");

const checkEmailCache = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next();

  try {
    const cached = await redis.get(`user:${email}`);
    if (cached) {
      return res.status(409).json({
        message: "Bu e-posta adresi daha önce kullanılmış (cache).",
      });
    }
    next();
  } catch (error) {
    console.error("Redis kontrol hatası:", error);
    next(); // Redis hatalıysa engelleme, DB kontrolüne geç
  }
};

module.exports = checkEmailCache;
