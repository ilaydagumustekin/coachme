import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

// KAYIT OL
router.post('/register', async (req, res) => {
  try {
    const { email, password, phone, height, weight, bmi, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu e-posta zaten kayıtlı!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
      height,
      weight,
      bmi,
      role: role || 'user' // 👈 Varsayılan rol kullanıcı
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET || 'supersecretkey123',
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'Kayıt başarıyla tamamlandı!',
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Kayıt Hatası:', error);
    res.status(500).json({ message: 'Kayıt sırasında bir hata oluştu.' });
  }
});

// GİRİŞ YAP
router.post('/login', async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Şifre hatalı!' });
    }

    // 👇 Admin girişi istendiyse, rol kontrolü yap
    if (isAdmin && user.role !== 'admin') {
      return res.status(403).json({ message: 'Bu kullanıcı yönetici değil!' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'supersecretkey123',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Giriş başarılı!',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Giriş Hatası:', error);
    res.status(500).json({ message: 'Giriş sırasında bir hata oluştu.' });
  }
});

// BMI GÜNCELLE
router.put('/update-bmi/:email', async (req, res) => {
  const { height, weight, bmi } = req.body;
  const { email } = req.params;

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
