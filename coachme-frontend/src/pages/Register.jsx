import React, { useState } from "react";
import "./AdminDashboard.css";
import "./AddTrainerPages.css";

// ENV değişkenini başta console.log ile kontrol edelim
const apiUrl = process.env.REACT_APP_API_URL;
console.log("REACT_APP_API_URL:", apiUrl); // Burada undefined görüyorsan, env dosyan hatalı!

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // apiUrl hala undefined ise hata ver
    if (!apiUrl) {
      setError(
        ".env dosyanı kontrol et! REACT_APP_API_URL undefined geliyor. Sunucu url'ini .env dosyana ekledin mi?"
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Kayıt başarısız.");
      }

      setName("");
      setEmail("");
      setPassword("");
      setError("");
      alert("Hesap başarıyla oluşturuldu!");
    } catch (err) {
      setError(err.message || "Kayıt başarısız.");
    }
    setLoading(false);
  };

  return (
    <div className="add-trainer-wrapper">
      <h1 className="text-3xl font-bold text-white mb-8">KAYIT OL</h1>
      <form onSubmit={handleRegister} className="add-trainer-form">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium mb-2 text-white"
          >
            Adınız
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3"
            placeholder="Adınızı girin"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium mb-2 text-white"
          >
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
          <label
            htmlFor="password"
            className="block text-lg font-medium mb-2 text-white"
          >
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
        {error && <p className="text-red-500 font-medium mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-xl shadow hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Kayıt Olunuyor..." : "Kayıt Ol"}
        </button>
      </form>
    </div>
  );
};

export default Register;
