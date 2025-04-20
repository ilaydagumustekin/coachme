import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Sepet context'i
import { AuthProvider } from './context/AuthContext';  // Kullanıcı girişi context'i
import Team from './pages/Team';  // Ana sayfa: Eğitmen listesi
import TrainerProfile from './pages/TrainerProfile';  // Eğitmen profili sayfası
import Cart from './pages/Cart';  // Sepet sayfası
import AccountPage from './pages/AccountPage'; // Hesabım sayfası
import MedicalHistoryPage from './pages/MedicalHistoryPage'; // Hastalık geçmişi sayfası
import AdminProgramPage from './pages/AdminProgramPage'; // Admin program yönetim sayfası
import Register from './pages/Register';  // Doğru import
import { Link } from 'react-router-dom';  // Link'i doğru şekilde import edin
import BMIPage from './pages/BMIPage';
import JoinTeam from './pages/JoinTeam';



const App = () => {
  return (
    <AuthProvider>  {/* Kullanıcı girişi için context */}
      <CartProvider>  {/* Sepet için context */}
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/register">Kayıt Ol</Link>  {/* Register sayfasına yönlendiren link */}
              </li>
              <Link to="/join-team">
            <button>Ekibimize Katıl</button>  {/* Ana sayfada buton */}
          </Link>
            </ul>
          </nav>
        
          <Routes>
            <Route path="/" element={<Team />} />  {/* Ana sayfa: Eğitmen listesi */}
            <Route path="/trainer/:trainerId" element={<TrainerProfile />} />  {/* Eğitmen profili sayfası */}
            <Route path="/cart" element={<Cart />} />  {/* Sepet sayfası */}
            <Route path="/account" element={<AccountPage />} />  {/* Hesabım sayfası */}
            <Route path="/medical-history" element={<MedicalHistoryPage />} />  {/* Hastalık geçmişi sayfası */}
            <Route path="/admin/programs" element={<AdminProgramPage />} />  {/* Admin program yönetimi */}
            <Route path="/register" element={<Register />} />  {/* Register sayfası */}
            <Route path="/bmi" element={<BMIPage />} />  {/* BMI sayfası için route */}
            <Route path="/join-team" element={<JoinTeam />} />  {/* JoinTeam sayfasını yönlendir */}

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
