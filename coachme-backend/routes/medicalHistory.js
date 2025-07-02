import express from 'express';
import User from '../models/User.js';
import MedicalHistory from '../models/MedicalHistory.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  const { userId, history } = req.body;

  if (!userId) return res.status(400).json({ message: 'Kullanıcı ID gereklidir' });
  if (!history) return res.status(400).json({ message: 'Hastalık geçmişi boş olamaz' });

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(403).json({ message: 'Kayıtlı kullanıcı bulunamadı' });

    // Eğer aynı kullanıcı için önceden kayıt varsa güncelle, yoksa yeni kayıt oluştur
    let existingHistory = await MedicalHistory.findOne({ userId });
    if (existingHistory) {
      existingHistory.history = history;
      await existingHistory.save();
      return res.status(200).json({ message: 'Hastalık geçmişi güncellendi', data: existingHistory });
    } else {
      const newHistory = new MedicalHistory({ userId, history });
      await newHistory.save();
      return res.status(201).json({ message: 'Hastalık geçmişi kaydedildi', data: newHistory });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Sunucu hatası' });
  }
});

export default router;
