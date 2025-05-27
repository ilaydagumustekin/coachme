import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// BMI BİLGİSİNİ GÜNCELLE
router.put('/update-bmi/:email', async (req, res) => {
  try {
    const { email } = req.params;          // Burada email alıyoruz
    const { height, weight } = req.body;

    if (!height || !weight) {
      return res.status(400).json({ message: 'Boy ve kilo zorunludur.' });
    }

    const heightInMeters = height / 100;
    const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(2);

    const updatedUser = await User.findOneAndUpdate(
      { email },                         // email ile kullanıcıyı bul
      { height, weight, bmi },           // güncellenecek alanlar
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }

    res.json({ message: 'BMI başarıyla güncellendi.', user: updatedUser });
  } catch (error) {
    console.error('BMI Güncelleme Hatası:', error);
    res.status(500).json({ message: 'BMI güncellenirken bir hata oluştu.' });
  }
});

export default router;
