import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  token?: string;
  setToken: (token: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  setToken: (token: string) => { },
});

const AuthProvider = ({ children }: any) => {
  const [token, handleTokenState] = useState<string>();

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    await AsyncStorage.getItem("token", (err: any, result: any) => {
      if (!err) {
        setToken(result ? result : "");
      } else {
        setToken("");
      }
    });
  };

  const setToken = (token: string) => {
    AsyncStorage.setItem('token', token);
    handleTokenState(token);
  };

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };