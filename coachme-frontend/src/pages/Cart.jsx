import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemove = (trainerId) => {
    const confirm = window.confirm("Eğitmeni silmek istediğinizden emin misiniz?");
    if (confirm) {
      removeFromCart(trainerId);
    }
  };

  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Sepet boş, ödeme yapamazsınız.");
      return;
    }

    const paymentMethod = window.prompt("Ödeme yöntemi seçin: 'kredi' veya 'havale'");
    if (paymentMethod === "kredi" || paymentMethod === "havale") {
      alert(`Ödeme (${paymentMethod}) başarılı! Teşekkür ederiz.`);
      clearCart();
      navigate('/');
    } else {
      alert("Geçersiz ödeme yöntemi.");
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
                    <strong>{item.name}</strong> - {item.specialty} - {item.price || 100}₺
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