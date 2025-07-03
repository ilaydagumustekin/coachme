import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// BASE_URL'i yukarıda tanımla, istersen .env ile de çekebilirsin.
const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Direkt fetch ile API'ye istek atan fonksiyon
  const handleSubmit = async (e, isAdmin) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = isAdmin ? adminEmail : userEmail;
    const password = isAdmin ? adminPassword : userPassword;

    if (!email || !password) {
      setError("Lütfen tüm alanları doldurun.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Giriş başarısız.");
      }
      const data = await res.json();
      localStorage.setItem("token", data.token);
      // Eğer admin ile ilgili bir veri gelirse burada kontrol edebilirsin
      navigate(isAdmin ? "/admin" : "/account");
    } catch (err) {
      setError(err.message || "Giriş başarısız.");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2 className="text-center mb-8">Giriş Yapın</h2>

      <div className="login-forms-container">
        {/* Kullanıcı Girişi */}
        <div className="login-box">
          <h3 className="text-center">Kullanıcı Girişi</h3>
          <p className="text-center text-sm text-gray-600">
            Lütfen kullanıcı e-posta adresinizi ve şifrenizi girin.
          </p>
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <input
              type="email"
              placeholder="Email adresi"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              disabled={loading}
            />
            {error && <p className="error">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>

        {/* Yönetici Girişi */}
        <div className="login-box mt-8">
          <h3 className="text-center">Yönetici Girişi</h3>
          <p className="text-center text-sm text-gray-600">
            Yönetici olarak giriş yapıyorsanız, lütfen yönetici e-posta
            adresinizi ve şifrenizi girin.
          </p>
          <form onSubmit={(e) => handleSubmit(e, true)}>
            <input
              type="email"
              placeholder="Yönetici Email adresi"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Yönetici Şifre"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              disabled={loading}
            />
            {error && <p className="error">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
