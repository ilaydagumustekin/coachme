import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Kullanıcıyı giriş yaptığında ayarlama
  const login = (username, isTrainerStatus = false, isAdminStatus = false) => {
    setUser({ username, isTrainer: isTrainerStatus, isAdmin: isAdminStatus });
  };

  // Kullanıcıyı çıkış yaptıktan sonra sıfırlama
  const logout = () => {
    setUser(null);
  };

  // Kullanıcı verisini güncelleme fonksiyonu
  const updateUserData = (data) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...data,  // Yeni verilerle mevcut kullanıcıyı güncelliyoruz
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
