// TrainerProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import  trainers from './Team';
import { useAuth } from '../context/AuthContext';  // Kullanıcıyı almak için

const TrainerProfile = () => {
  const { trainerId } = useParams();
  const { user } = useAuth();  // Kullanıcı bilgisini al
  const trainerData = trainers.find(t => t.id === parseInt(trainerId));  // Burada isim değiştirdim

  if (!trainerData) return <p>Bu eğitmen bulunamadı.</p>;

  return (
    <div className="trainer-profile">
      <h2>{trainerData.name}</h2>
      <p>Yaş: {trainerData.age}</p>
      <p>Cinsiyet: {trainerData.gender}</p>
      <p>Deneyim: {trainerData.experience} yıl</p>
      <p>Özellikler: {trainerData.specialty}</p>
      <p>Bio: {trainerData.bio}</p>

      <hr />

      {user && user.medicalHistory ? (
        <div className="medical-history">
          <h3>Danışanın Hastalık Geçmişi</h3>
          <ul>
            {user.medicalHistory.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Hastalık geçmişi bilgisi yok.</p>
      )}
    </div>
  );
};

export default TrainerProfile;
