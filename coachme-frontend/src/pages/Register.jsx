import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  // Kullanıcıyı kaydetme
  const handleRegister = (e) => {
    e.preventDefault();

    // Kullanıcı zaten var mı kontrol et
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setError('Bu e-posta zaten kayıtlı!');
      return;
    }

    // Yeni kullanıcıyı oluştur ve localStorage'a kaydet
    const newUser = {
      email,
      password,
      phone
    };

    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    setEmail('');
    setPassword('');
    setPhone('');
    setError('');
    alert('Hesap başarıyla oluşturuldu!');
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon Numarası:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Register;
