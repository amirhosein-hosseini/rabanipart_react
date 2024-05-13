import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie , deleteCookie, setCookie } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token')); 
  const navigate = useNavigate();
  const token = getCookie('token');
  const rtoken = getCookie('rtoken');

  // const signOut = () => {
  //   axios.post(domain + 'api/accounts/logout/' , {"refresh_token": rtoken} , {
  //     headers : {
  //         'Authorization' : 'Bearer ' + token,
  //     }
  //   })
  //     .then((response) => {
  //         console.log(response.data.message);
  //         deleteCookie('token');
  //         deleteCookie("rtoken")
  //         setIsLoggedIn(false);
  //         navigate('/signin')
  //     })
  //     .catch((error) => {
  //         console.log(error?.response?.data?.message);
  //     });
  // };


  const signIn = (token) => {
    setCookie('token', token , 7);
    setIsLoggedIn(true);
    navigate("/")
  };

  

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};