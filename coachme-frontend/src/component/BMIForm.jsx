
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const BMIForm = () => {
  const { user, updateUserData } = useAuth();  // Kullanıcı verisini AuthContext'ten alıyoruz
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Boy ve kilo girilmesi gerekiyor!');
      return;
    }
    const heightInMeters = height / 100;  // Boyu metre cinsine çeviriyoruz
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);  // BMI hesaplama
    updateUserData({ height, weight, bmi });  // Kullanıcı verisini güncelliyoruz
  };

  return (
    <div>
      <h2>{user ? `${user.username} için BMI Hesaplama` : 'Lütfen giriş yapın'}</h2>
      {user ? (
        <>
          <input
            type="number"
            placeholder="Boy (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Kilo (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button onClick={calculateBMI}>Hesapla</button>
          {user.bmi && <h3>BMI: {user.bmi}</h3>}
        </>
      ) : (
        <p>Lütfen giriş yapın!</p>
      )}
    </div>
  );
};

export default BMIForm;
