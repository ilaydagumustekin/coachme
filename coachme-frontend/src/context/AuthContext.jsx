// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  // Kullanıcı verisini güncelleyen fonksiyon
  const updateUserData = (data) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...data,  // Yeni verileri mevcut kullanıcının bilgileriyle birleştiriyoruz
    }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

