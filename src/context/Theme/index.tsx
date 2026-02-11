import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/theme/light';
import darkTheme from '@/theme/dark';
import GlobalStyle from '@/global';

interface ThemeContextData {
  toggleTheme(): void;
  themeName: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const storageValue = localStorage.getItem('@Realize:theme');
    return storageValue ? (JSON.parse(storageValue)) : 'light';
  });

  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    localStorage.setItem('@Realize:theme', JSON.stringify(newTheme));
  };

  const currentTheme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);