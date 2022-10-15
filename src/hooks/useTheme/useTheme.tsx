import React, { createContext, useContext, useEffect, useState } from 'react';
import * as eva from '@eva-design/eva'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { default as customTheme } from '../../../custom-theme.json'

type ThemeContextType = {
  theme: any;
  setTheme: (theme: any) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: { ...eva.light, ...customTheme },
  setTheme: (theme: any) => { },
});

const ThemeProvider = ({ children }: any) => {
  const [theme, handleThemeState] = useState<any>({ ...eva.light, ...customTheme });

  useEffect(() => {
    getLocalTheme();
  }, [])

  const getLocalTheme = async () => {
    const localTheme = await AsyncStorage.getItem('theme');

    if (localTheme === 'dark') {
      handleThemeState({ ...eva.dark, ...customTheme });
    } else {
      handleThemeState({ ...eva.light, ...customTheme });
    }
  }

  const setTheme = (theme: 'light' | 'dark') => {
    AsyncStorage.setItem('theme', theme);

    if (theme === 'light') {
      handleThemeState({ ...eva.light, ...customTheme });
    } else {
      handleThemeState({ ...eva.dark, ...customTheme });
    }
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useTheme };