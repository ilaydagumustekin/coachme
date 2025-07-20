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
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    optionsSuccessStatus: 204,
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
