import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JoinTeam from "./pages/JoinTeam";  // Ekibimize Katıl sayfası

function App() {
  return (
    <Router>
      <div className="App">
        <h1>CoachMe Fitness</h1>
        <nav>
          <ul>
            <li><Link to="/login">Giriş Yap</Link></li>
            <li><Link to="/register">Kayıt Ol</Link></li>
            <li><Link to="/join-team">Ekibimize Katıl</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Ana Sayfa</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/join-team" element={<JoinTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



