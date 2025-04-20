import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Eğer e-posta ya da şifre boşsa hata mesajı göster
        if (!email || !password) {
            setError("Lütfen tüm alanları doldurun.");
        } else {
            setError("");
            alert("Giriş başarılı!");

        }
    };


    return (
        <div className="login-container">
            <h2>CoachMe Giriş</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email adresi"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
};

export default Login;
