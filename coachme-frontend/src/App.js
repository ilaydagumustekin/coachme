import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  // Sepet context'i
import { AuthProvider } from './context/AuthContext';  // Kullanıcı girişi context'i
import Team from './pages/Team';  // Ana sayfa: Eğitmen listesi
import TrainerProfile from './pages/TrainerProfile';  // Eğitmen profili sayfası
import Cart from './pages/Cart';  // Sepet sayfası
import AccountPage from './pages/AccountPage'; // Hesabım sayfası
import MedicalHistoryPage from './pages/MedicalHistoryPage'; // Hastalık geçmişi sayfası
import MevcutProgram from './component/MevcutProgram'; // Mevcut program sayfası bileşeni
import BodyPage from './pages/BodyPage'; // Beden ölçüsü bilgileri sayfası

const App = () => {
    return (
        <AuthProvider>  {/* Kullanıcı girişi için context */}
            <CartProvider>  {/* Sepet için context */}
                <Router>  {/* Routing işlemi */}
                    <Routes>
                        <Route path="/" element={<Team />} />  {/* Ana sayfa: Eğitmen listesi */}
                        <Route path="/trainer/:trainerId" element={<TrainerProfile />} />  {/* Eğitmen profili sayfası */}
                        <Route path="/cart" element={<Cart />} />  {/* Sepet sayfası */}
                        <Route path="/account" element={<AccountPage />} />  {/* Hesabım sayfası */}
                        <Route path="/medical-history" element={<MedicalHistoryPage />} />  {/* Hastalık geçmişi sayfası */}

                        {/* Mevcut Program Sayfası */}
                        <Route path="/mevcut-program" element={<MevcutProgram />} />  {/* Mevcut Program sayfası */}

                        {/* Beden ölçüsü bilgileri sayfası */}
                        <Route path="/body-measurements" element={<BodyPage />} />  {/* Beden ölçüsü sayfası */}
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;

