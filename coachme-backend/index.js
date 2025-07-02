import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Route dosyaları
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import joinTeamRoutes from './routes/joinTeam.js';
import cartRoutes from './routes/cart.js';
import medicalHistoryRouter from './routes/medicalHistory.js';
import programRoutes from './routes/program.js'; // <-- Program routes eklendi

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API route'ları
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/join-team', joinTeamRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/medical-history', medicalHistoryRouter);
app.use('/api/program', programRoutes); // <-- Program endpoint'i eklendi

// MongoDB bağlantısı ve sunucuyu başlatma
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor`);
    });
  })
  .catch((err) => {
    console.error('Veritabanı bağlantı hatası:', err.message);
  });
