import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import joinTeamRoutes from './routes/joinTeam.js'; // Yeni route

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Route'ları bağlama
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/join-team', joinTeamRoutes); // Ekibimize Katıl route'u

// Veritabanına bağlanma ve sunucuyu başlatma
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Veritabanına bağlanılamadı:', err);
  });
