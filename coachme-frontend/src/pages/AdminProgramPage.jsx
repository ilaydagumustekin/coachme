import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminProgramPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([
    { id: 1, name: 'Fitness Başlangıç', price: 100 },
    { id: 2, name: 'Pilates', price: 150 }
  ]);
  const [newProgram, setNewProgram] = useState({ name: '', price: '' });

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/'); // Admin değilse, ana sayfaya yönlendir
    }
  }, [user, navigate]);

  // Program ekleme işlemi
  const handleAddProgram = (e) => {
    e.preventDefault();
    if (newProgram.name && newProgram.price) {
      setPrograms([...programs, { id: programs.length + 1, ...newProgram }]);
      setNewProgram({ name: '', price: '' });
    } else {
      alert('Program adı ve fiyatı girin.');
    }
  };

  // Program silme işlemi
  const handleDeleteProgram = (id) => {
    setPrograms(programs.filter((program) => program.id !== id));
  };

  // Program güncelleme işlemi
  const handleUpdateProgram = (id, updatedPrice) => {
    setPrograms(programs.map((program) =>
      program.id === id ? { ...program, price: updatedPrice } : program
    ));
  };

  return (
    <div>
      <h2>Program Yönetimi</h2>

      {/* Program ekleme formu */}
      <form onSubmit={handleAddProgram}>
        <input
          type="text"
          placeholder="Program Adı"
          value={newProgram.name}
          onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Fiyat"
          value={newProgram.price}
          onChange={(e) => setNewProgram({ ...newProgram, price: e.target.value })}
        />
        <button type="submit">Program Ekle</button>
      </form>

      {/* Program listesi */}
      <h3>Mevcut Programlar</h3>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            {program.name} - {program.price}₺
            {/* Fiyat değiştirme */}
            <button onClick={() => {
              const newPrice = prompt('Yeni fiyatı girin:', program.price);
              if (newPrice) handleUpdateProgram(program.id, newPrice);
            }}>Fiyat Değiştir</button>
            {/* Program silme */}
            <button onClick={() => handleDeleteProgram(program.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProgramPage;
