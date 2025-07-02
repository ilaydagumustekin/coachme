import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },          // Eğitmenin adı veya program adı
  specialty: { type: String },                     // Uzmanlık alanı (örneğin fitness, yoga, vb.)
  price: { type: Number, required: true },         // Ücret
  description: { type: String },                   // Açıklama (isteğe bağlı)
  image: { type: String }                          // Görsel URL’si (isteğe bağlı)
}, { timestamps: true });

export default mongoose.model('Program', programSchema);
