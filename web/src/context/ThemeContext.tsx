import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'nocturne' | 'daylight';

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function getInitial(): Theme {
  const stored = localStorage.getItem('prsys-theme') as Theme | null;
  if (stored === 'daylight' || stored === 'nocturne') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'daylight' : 'nocturne';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'daylight' ? 'light' : 'dark'
    );
    localStorage.setItem('prsys-theme', theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggle = () => setThemeState(t => t === 'nocturne' ? 'daylight' : 'nocturne');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
