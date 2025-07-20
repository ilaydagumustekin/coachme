import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sepete yeni eğitmen ekleme
  const addToCart = (trainer) => setCart((prevCart) => [...prevCart, trainer]);

  // Sepetten eğitmen silme
  const removeFromCart = (trainerId) =>
      setCart((prevCart) => prevCart.filter(item => item.id !== trainerId));

  // Sepeti tamamen temizleme (ödeme sonrası vs.)
  const clearCart = () => setCart([]);

  return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);