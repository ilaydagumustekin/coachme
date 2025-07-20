const express = require("express");
const app = express();
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const programRoutes = require("./routes/programRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://coachme-xi.vercel.app"], // React uygulamanın adresi
    credentials: true, // Eğer cookie/jwt falan kullanıyorsan ekle
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
