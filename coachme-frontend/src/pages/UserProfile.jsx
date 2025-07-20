
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Kullanıcı bilgisi
import MedicalHistoryForm from '../component/MedicalHistoryForm';

const UserProfile = () => {
  const { user } = useAuth();  // Giriş yapan kullanıcı
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleMedicalHistorySubmit = (history) => {
    setMedicalHistory(history);
    // Burada history verisini API'ye gönderip kaydedebilirsiniz.
    alert('Hastalık geçmişiniz kaydedildi!');
  };

  return (
    <div>
      <h2>{user} Profil Sayfası</h2>
      <h3>Hastalık Geçmişi</h3>
      <MedicalHistoryForm onSubmit={handleMedicalHistorySubmit} />
      {medicalHistory && <p>Hastalık Geçmişiniz: {medicalHistory}</p>}
    </div>
  );
};

export default UserProfile;
