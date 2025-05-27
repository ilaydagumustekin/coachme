import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const router = express.Router();

// KAYIT OL
router.post('/register', async (req, res) => {
  try {
    const { email, password, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu e-posta zaten kayıtlı!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();

    res.status(201).json({ message: 'Kayıt başarıyla tamamlandı!' });
  } catch (error) {
    console.error('Kayıt Hatası:', error);
    res.status(500).json({ message: 'Kayıt sırasında bir hata oluştu.' });
  }
});

// BMI GÜNCELLE
router.put('/update-bmi/:email', async (req, res) => {
  const { height, weight, bmi } = req.body;
  const { email } = req.params;

  console.log('--- BMI GÜNCELLEME ---');
  console.log('Email:', email);
  console.log('Boy:', height);
  console.log('Kilo:', weight);
  console.log('BMI:', bmi);

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { height, weight, bmi },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }

    res.status(200).json({ message: 'BMI başarıyla güncellendi.', user: updatedUser });
  } catch (error) {
    console.error('BMI Güncelleme Hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası: BMI güncellenemedi.' });
  }
});

export default router;
