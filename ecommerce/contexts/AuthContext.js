import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (data) => {
    // Perform any necessary login logic
    setLoggedIn(true);
    setUserData(data);
  };

  const logout = () => {
    // Perform any necessary logout logic
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
