import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [userEmail, setUserEmail] = useState(""); // Kullanıcı email'i
    const [userPassword, setUserPassword] = useState(""); // Kullanıcı şifresi
    const [adminEmail, setAdminEmail] = useState(""); // Yönetici email'i
    const [adminPassword, setAdminPassword] = useState(""); // Yönetici şifresi
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Form gönderildiğinde
    const handleSubmit = (e, isAdmin) => {
        e.preventDefault();

        if (isAdmin) {
            // Yönetici girişi
            if (!adminEmail || !adminPassword) {
                setError("Lütfen tüm alanları doldurun.");
            } else {
                setError("");
                // Yönetici girişinde admin paneline yönlendir
                navigate("/admin"); // Yönetici paneline yönlendirme
            }
        } else {
            // Kullanıcı girişi
            if (!userEmail || !userPassword) {
                setError("Lütfen tüm alanları doldurun.");
            } else {
                setError("");
                // Kullanıcı girişinde kullanıcı sayfasına yönlendir
                navigate("/account"); // Kullanıcı hesabına yönlendirme
            }
        }
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
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                            Giriş Yap
                        </button>
                    </form>
                </div>

                {/* Yönetici Girişi */}
                <div className="login-box mt-8">
                    <h3 className="text-center">Yönetici Girişi</h3>
                    <p className="text-center text-sm text-gray-600">
                        Yönetici olarak giriş yapıyorsanız, lütfen yönetici e-posta adresinizi ve şifrenizi girin.
                    </p>
                    <form onSubmit={(e) => handleSubmit(e, true)}>
                        <input
                            type="email"
                            placeholder="Yönetici Email adresi"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Yönetici Şifre"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
                            Giriş Yap
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
