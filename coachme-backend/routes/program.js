// routes/program.js
import express from 'express';
import Program from '../models/Program.js'; // Uzantıyı da yaz!

const router = express.Router();

// PUT: Fiyat Güncelleme
router.put('/update-price/:id', async (req, res) => {
  const programId = req.params.id;
  const { newPrice } = req.body;

  try {
    const updatedProgram = await Program.findByIdAndUpdate(
      programId,
      { price: newPrice },
      { new: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ message: 'Program bulunamadı.' });
    }

    res.status(200).json({ message: 'Fiyat güncellendi.', updatedProgram });
  } catch (error) {
    console.error('Fiyat güncelleme hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası.' });
  }
});

export default router;
