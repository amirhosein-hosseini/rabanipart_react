import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCookie , deleteCookie, setCookie } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token')); 
  const navigate = useNavigate();
  const token = getCookie('token');
  const rtoken = getCookie('rtoken');

  const signOut = () => {
    deleteCookie('token');
    setIsLoggedIn(false)
    navigate('/login')
    toast.success("با موفقیت خارج شدید")
  };


  const signIn = (token) => {
    setCookie('token', token , 7);
    setIsLoggedIn(true);
    navigate("/")
  };

  

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn , signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};