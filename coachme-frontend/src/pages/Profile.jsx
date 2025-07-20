// Profile.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();  // Kullanıcı verisini alıyoruz

  if (!user) {
    return <div>Lütfen giriş yapın!</div>;
  }

  return (
    <div>
      <h2>{user.username} Profili</h2>
      <p>Boy: {user.height} cm</p>
      <p>Kilo: {user.weight} kg</p>
      <p>BMI: {user.bmi}</p>
    </div>
  );
};

export default Profile;
