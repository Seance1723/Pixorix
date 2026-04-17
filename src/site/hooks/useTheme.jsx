import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'pixorix-site-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    const resolvedTheme = savedTheme || 'light';

    setTheme(resolvedTheme);
    document.documentElement.setAttribute('data-px-theme', resolvedTheme);
    document.body.setAttribute('data-site-theme', resolvedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-px-theme', theme);
    document.body.setAttribute('data-site-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
