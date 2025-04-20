import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

import Team from './pages/Team';
import TrainerProfile from './pages/TrainerProfile';
import Cart from './pages/Cart';
import AccountPage from './pages/AccountPage';
import MedicalHistoryPage from './pages/MedicalHistoryPage';
import AdminProgramPage from './pages/AdminProgramPage';
import Register from './pages/Register';
import BMIPage from './pages/BMIPage';
import JoinTeam from './pages/JoinTeam';
import MevcutProgram from './component/MevcutProgram';
import BodyPage from './pages/BodyPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AdminDashboard from './pages/AdminDashboard';
import AddTrainerPages from './pages/AddTrainerPages';
import TrainerListPage from './pages/TrainerListPage';
import DeleteTrainerForm from './pages/DeleteTrainerForm';
import UpdatePricePage from './pages/UpdatePricePage';
import UploadProgram from './pages/UploadProgram';
import DeleteProgramPage from './pages/DeleteProgramPage';
import UpdateProgramPage from './pages/UpdateProgramPage';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <nav>
            <ul>
              <li><Link to="/login">GİRİŞ YAP</Link></li>
              <li><Link to="/logout">ÇIKIŞ YAP</Link></li>
              <li><Link to="/register">Kayıt Ol</Link></li>
              <li><Link to="/join-team"><button>Ekibimize Katıl</button></Link></li>
              <li><Link to="/admin">YÖNETİCİ PANELİ</Link></li>
            </ul>
          </nav>

          <Routes>
            {/* Genel Sayfalar */}
            <Route path="/" element={<Team />} />
            <Route path="/trainer/:trainerId" element={<TrainerProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/medical-history" element={<MedicalHistoryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/mevcut-program" element={<MevcutProgram />} />
            <Route path="/body-measurements" element={<BodyPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bmi" element={<BMIPage />} />
            <Route path="/join-team" element={<JoinTeam />} />

            {/* Yönetici Paneli ve Admin Sayfaları */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-trainer" element={<AddTrainerPages />} />  {/* Eğitmen ekleme sayfası */}
            <Route path="/admin/trainer-list" element={<TrainerListPage />} />  {/* Eğitmenler listesi sayfası */}
            <Route path="/admin/delete-trainer" element={<DeleteTrainerForm />} />  {/* Eğitmen silme sayfası */}
            <Route path="/admin/update-price" element={<UpdatePricePage />} />  {/* Fiyat güncelleme sayfası */}
            <Route path="/admin/upload-program" element={<UploadProgram />} />  {/* Program yükleme sayfası */}
            <Route path="/admin/delete-program" element={<DeleteProgramPage />} />  {/* Program silme sayfası */}
            <Route path="/admin/update-program" element={<UpdateProgramPage />} />  {/* Program güncelleme sayfası */}
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
