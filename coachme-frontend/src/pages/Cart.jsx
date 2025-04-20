// Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Sepetiniz</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span> - <span>{item.specialty}</span>
              <button onClick={() => removeFromCart(item.id)}>Sil</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
