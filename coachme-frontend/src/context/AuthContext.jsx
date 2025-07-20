import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Başlangıçta varsayılan bir kullanıcı nesnesi oluşturuyoruz (giriş yapmamış ama form çalışabilir)
  const [user, setUser] = useState({
    username: 'Misafir',
    isTrainer: false,
    isAdmin: false,
    bmi: null
  });

  const login = (username, isTrainerStatus = false, isAdminStatus = false) => {
    setUser({ username, isTrainer: isTrainerStatus, isAdmin: isAdminStatus });
  };

  const logout = () => {
    // Girişten çıkınca tekrar Misafir moduna döndür
    setUser({
      username: 'Misafir',
      isTrainer: false,
      isAdmin: false,
      bmi: null
    });
  };

  const updateUserData = (data) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...data,
    }));
  };

  return (
      <AuthContext.Provider value={{ user, login, logout, updateUserData }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);