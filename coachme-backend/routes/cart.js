import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

// 📌 Sepeti Getir
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.programId");
    res.status(200).json({ cart: cart ? cart.items : [] });
  } catch (err) {
    res.status(500).json({ message: "Sepet getirilemedi", error: err.message });
  }
});

// 📌 Sepete Ekle
router.post("/add", async (req, res) => {
  const { userId, programId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ programId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex((item) => item.programId.toString() === programId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ programId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "Sepete eklendi", cart: cart.items });
  } catch (err) {
    res.status(500).json({ message: "Sepete eklenirken hata oluştu", error: err.message });
  }
});

// 📌 Sepetten Sil
router.delete("/remove", async (req, res) => {
  const { userId, programId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Sepet bulunamadı" });

    cart.items = cart.items.filter((item) => item.programId.toString() !== programId);
    await cart.save();

    res.status(200).json({ message: "Sepetten silindi", cart: cart.items });
  } catch (err) {
    res.status(500).json({ message: "Sepetten silinirken hata oluştu", error: err.message });
  }
});

export default router;
