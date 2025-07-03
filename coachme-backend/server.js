require("dotenv").config();
const app = require("./index");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB bağlantısı başarılı.");
  })
  .catch((err) => {
    console.error("MongoDB bağlantısı hatası:", err);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Sunucu ${process.env.PORT} portunda çalışıyor.`);
});
