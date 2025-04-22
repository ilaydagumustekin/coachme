import React, { useState } from 'react';
import './AdminDashboard.css';
import './AddTrainerPages.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleRegister = (e) => {
    e.preventDefault();
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setError('Bu e-posta zaten kayıtlı!');
      return;
    }

    const newUser = { email, password, phone };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setEmail('');
    setPassword('');
    setPhone('');
    setError('');
    alert('Hesap başarıyla oluşturuldu!');
  };

  return (
      <div className="add-trainer-wrapper">
        <h1 className="text-3xl font-bold text-white mb-8">KAYIT OL</h1>
        <form onSubmit={handleRegister} className="add-trainer-form">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-white">
              E-posta
            </label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg mb-3"
                placeholder="E-posta adresi girin"
                required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium mb-2 text-white">
              Şifre
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg mb-3"
                placeholder="Şifre girin"
                required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium mb-2 text-white">
              Telefon Numarası
            </label>
            <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border rounded-lg mb-3"
                placeholder="Telefon numarası girin"
                required
            />
          </div>

          {error && <p className="text-red-500 font-medium mb-4">{error}</p>}

          <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
  );
};

export default Register;
