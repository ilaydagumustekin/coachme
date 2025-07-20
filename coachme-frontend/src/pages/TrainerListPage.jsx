import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainerListPage = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        console.log("API URL:", process.env.REACT_APP_API_URL);
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/users/trainers`);
        setTrainers(data);
      } catch (error) {
        console.error('Eğitmenler alınamadı:', error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Eğitmen Listesi</h1>
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow">
        {trainers.length === 0 ? (
          <p className="text-gray-500">Henüz eğitmen bulunmamaktadır.</p>
        ) : (
          trainers.map((trainer) => (
            <div key={trainer._id} className="mb-4 p-4 border-b">
              <h2 className="text-xl font-bold">{trainer.name}</h2>
              <p><strong>Email:</strong> {trainer.email}</p>
              <p><strong>Uzmanlık:</strong> {trainer.specialty || 'Belirtilmedi'}</p>
              <p><strong>Deneyim:</strong> {trainer.experience || 'Belirtilmedi'}</p>
              <p><strong>Hakkında:</strong> {trainer.bio || 'Belirtilmedi'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrainerListPage;
