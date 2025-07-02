// models/MedicalHistory.js
import mongoose from 'mongoose';

const MedicalHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Kullanıcı modeline referans
    required: true,
    unique: true,  // Her kullanıcı için sadece bir hastalık geçmişi olsun
  },
  history: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const MedicalHistory = mongoose.model('MedicalHistory', MedicalHistorySchema);
export default MedicalHistory;
