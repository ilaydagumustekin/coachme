import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './TrainerCard.css';

// Argo/küfür listesi
const bannedWords = ['küfür1', 'küfür2', 'argo1', 'argo2'];

const censorBadWords = (text) => {
  let censoredText = text;
  bannedWords.forEach(word => {
    const regex = new RegExp(word, 'gi'); 
    censoredText = censoredText.replace(regex, '***');
  });
  return censoredText;
};

const TrainerCard = ({ id, name, age, gender, experience, specialty, bio }) => {
  const { user, purchasedTrainers } = useAuth(); // Eğitimi alıp almadığı buradan kontrol
  const { addToCart } = useCart();

  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleAddToCart = () => {
    if (user) {
      addToCart({ id, name, specialty, bio });
    } else {
      alert('Lütfen giriş yapın!');
    }
  };

  const handleCommentSubmit = () => {
    if (!user) {
      alert("Yorum yapabilmek için giriş yapmalısınız!");
      return;
    }

    if (!purchasedTrainers?.includes(id)) {
      alert("Yorum yapabilmek için önce bu eğitmenin eğitimini satın almalısınız!");
      return;
    }

    if (comment.trim() === "") {
      alert("Yorum boş olamaz.");
      return;
    }

    const cleanComment = censorBadWords(comment);
    console.log(`Eğitmen (${name}) için yorum: ${cleanComment}`);
    alert("Yorumunuz kaydedildi!");
    setComment("");
    setShowComment(false);
  };

  return (
    <div className="trainer-card">
      <h3>{name}</h3>
      <p><strong>Yaş:</strong> {age}</p>
      <p><strong>Cinsiyet:</strong> {gender}</p>
      <p><strong>Tecrübe:</strong> {experience} yıl</p>
      <p><strong>Uzmanlık:</strong> {specialty}</p>
      <p><strong>Biyografi:</strong> {bio}</p>

      <button onClick={handleAddToCart}>Sepetten Kaldır</button>
      <button onClick={handleAddToCart}>Sepete Ekle</button>
      <button onClick={handleAddToCart}>Ödeme Yap</button>
        <button onClick={handleAddToCart}>Profili İncele</button>



      <button onClick={() => setShowComment(!showComment)}>
        {showComment ? "İptal" : "Yorum Yap"}
      </button>

      {showComment && (
        <div>
          <textarea
            placeholder="Eğitmen hakkında yorum yazın..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: '100%', marginTop: '8px' }}
          />
          <button onClick={handleCommentSubmit}>Gönder</button>
        </div>
      )}
    </div>
  );
};

export default TrainerCard;
