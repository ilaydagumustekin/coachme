import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sepete yeni eğitmen ekleme
  const addToCart = (trainer) => setCart((prevCart) => [...prevCart, trainer]);

  // Sepetten eğitmen silme
  const removeFromCart = (trainerId) => setCart((prevCart) => prevCart.filter(item => item.id !== trainerId));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
