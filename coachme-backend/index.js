const express = require("express");
const app = express();
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const programRoutes = require("./routes/programRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");

const whitelist = process.env.CORS_WHITELIST_DOMAINS
  ? process.env.CORS_WHITELIST_DOMAINS.split(',').map(domain => domain.trim())
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      // İstek gönderen origin whitelist içinde mi kontrol et
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        // origin bulunuyorsa veya null (aynı kaynak isteği gibi) ise izin ver
        callback(null, true);
      } else {
        // Aksi takdirde hata döndür
        callback(new Error('Bu origin CORS tarafından engellendi.'));
      }
    },
    credentials: true, // Eğer cookie/jwt falan kullanıyorsanız bu true olmalı
    optionsSuccessStatus: 200 // Bazı eski tarayıcılar (IE11, çeşitli SmartTV'ler) 204 yerine 200 bekler
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CoachMe API çalışıyor...");
});

app.use("/api/auth", authRoutes); // Tamam
app.use("/api/admin", adminRoutes); // Tamam
app.use("/api/programs", programRoutes); // Tamam
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
