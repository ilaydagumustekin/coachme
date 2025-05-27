// routes/joinTeam.js
import express from 'express';
import TeamApplication from '../models/TeamApplication.js';

const router = express.Router();

// POST /api/join-team
router.post("/", async (req, res) => {
  try {
    const { age } = req.body;

    if (parseInt(age) > 40) {
      return res.status(400).json({ message: "Yaş sınırı aşıldı. Başvuru alınmadı." });
    }

    const newApplication = new TeamApplication(req.body);
    await newApplication.save();

    res.status(201).json({ message: "Başvurunuz başarıyla alındı!" });
  } catch (err) {
    console.error("Başvuru hatası:", err);
    res.status(500).json({ error: "Sunucu hatası: Başvuru alınamadı." });
  }
});

export default router;
