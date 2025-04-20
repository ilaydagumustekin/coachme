// Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (trainerId) => {
    const confirm = window.confirm("Eğitmeni silmek istediğinizden emin misiniz?");
    if (confirm) {
      removeFromCart(trainerId);
    }
  };

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Sepet boş, ödeme yapamazsınız.");
    } else {
      alert("Ödeme başarılı! Teşekkür ederiz.");
      // Burada istersen yönlendirme yapabilirim, örn: navigate('/') ile ana sayfaya döner.
    }
  };

  return (
    <div className="cart">
      <h2>Sepetiniz</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.specialty} - {item.price}₺
              <button onClick={() => handleRemove(item.id)}>Sil</button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button onClick={handlePayment} style={{ marginTop: '20px' }}>
          Ödeme Yap
        </button>
      )}
    </div>
  );
};

export default Cart;
