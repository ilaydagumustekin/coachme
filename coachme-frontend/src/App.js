import React from 'react';
import './styles.css';
import './App.css';
import './index.css';
import './component/TrainerCard.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';



import Team from './pages/Team';
import TrainerProfile from './pages/TrainerProfile';
import Cart from './pages/Cart';
import AccountPage from './pages/AccountPage';
import MedicalHistoryPage from './pages/MedicalHistoryPage';
import Register from './pages/Register';
import BMIPage from './pages/BMIPage';
import JoinTeam from './pages/JoinTeam';
import CurrentProgramPage from './pages/CurrentProgramPage';
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
import ProgramChangePage from './pages/ProgramChangePage';




const App = () => {
  return (
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="app-container">
              {/* Üstte sabit bar */}
              <div className="topbar">
                <div className="logo">
                  <Link to="/">
                    <img src="/logo.png" alt="CoachMe Logo" className="logo-img" />
                  </Link>
                </div>


                <nav className="navbar">
                  <ul>
                    <li><Link to="/login"><button>GİRİŞ YAP</button></Link></li>
                    <li><Link to="/register"><button>KAYIT OL</button></Link></li>
                    <li><Link to="/join-team"><button>EKİBİMİZE KATIL</button></Link></li>
                    <li><Link to="/admin"><button>YÖNETİCİ PANELİ</button></Link></li>
                    <li><Link to="/logout"><button>ÇIKIŞ YAP</button></Link></li>
                  </ul>
                </nav>
              </div>


              <div className="main-content">
                <Routes>
                  {/* Genel Sayfalar */}
                  <Route path="/" element={<Team />} />
                  <Route path="/trainer/:trainerId" element={<TrainerProfile />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="/medical-history" element={<MedicalHistoryPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/mevcut-program" element={<CurrentProgramPage />} />
                  <Route path="/body-measurements" element={<BodyPage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/bmi" element={<BMIPage />} />
                  <Route path="/join-team" element={<JoinTeam />} />
                  <Route path="/program-degistir" element={<ProgramChangePage />} />


                  {/* Yönetici Paneli ve Admin Sayfaları */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/add-trainer" element={<AddTrainerPages />} />
                  <Route path="/admin/trainer-list" element={<TrainerListPage />} />
                  <Route path="/admin/delete-trainer" element={<DeleteTrainerForm />} />
                  <Route path="/admin/update-price" element={<UpdatePricePage />} />
                  <Route path="/admin/upload-program" element={<UploadProgram />} />
                  <Route path="/admin/delete-program" element={<DeleteProgramPage />} />
                  <Route path="/admin/update-program" element={<UpdateProgramPage />} />
                </Routes>
              </div>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
  );
};

export default App;