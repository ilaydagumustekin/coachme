import React, { useState } from 'react';

function JoinTeam() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    certificate: '',
    height: '',
    weight: '',
    phone: '',
    email: '',
    idNumber: ''
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Her değişimde hatayı temizler
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Boş alan kontrolü
    for (let key in formData) {
      if (formData[key].trim() === '') {
        setError('Lütfen tüm alanları doldurunuz!');
        return;
      }
    }

    // Yaş kontrolü
    if (parseInt(formData.age) > 40) {
      alert('Yaş sınırı aşıldı. Yöneticiye bildirim gönderilmeyecek.');
      return;
    }

    // Başarılı ise yöneticiye bildirim simülasyonu
    console.log("Form verileri:", formData);
    alert("Başvurunuz alınmıştır! Yöneticiye bildirim gönderildi.");
  };

  return (
    <div className="form-container">
      <h2>Ekibimize Katıl</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ad Soyad" onChange={handleChange} value={formData.name} />
        <input type="number" name="age" placeholder="Yaş" onChange={handleChange} value={formData.age} />
        <input type="text" name="certificate" placeholder="Sertifika" onChange={handleChange} value={formData.certificate} />
        <input type="number" name="height" placeholder="Boy (cm)" onChange={handleChange} value={formData.height} />
        <input type="number" name="weight" placeholder="Kilo (kg)" onChange={handleChange} value={formData.weight} />
        <input type="tel" name="phone" placeholder="Telefon" onChange={handleChange} value={formData.phone} />
        <input type="email" name="email" placeholder="E-posta" onChange={handleChange} value={formData.email} />
        <input type="text" name="idNumber" placeholder="TC Kimlik No" onChange={handleChange} value={formData.idNumber} />

        <button type="submit">Başvur</button>
      </form>
    </div>
  );
}

export default JoinTeam;
