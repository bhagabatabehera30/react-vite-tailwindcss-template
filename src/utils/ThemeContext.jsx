import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import incluedPrefixRoutesArr from './includeAdminTheme';

const ThemeContext = createContext({
  currentTheme: 'light',
  changeCurrentTheme: () => { },
});

export default function ThemeProvider({ children }) {
  const location = useLocation();
  const persistedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(persistedTheme || 'light');

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const isIncludedAaminTheme = incluedPrefixRoutesArr.some(prefix => location.pathname.startsWith(prefix));
    if (isIncludedAaminTheme) {
      localStorage.setItem('isIncludedAaminTheme', true);
      document.documentElement.classList.add('[&_*]:!transition-none');
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      }
      const transitionTimeout = setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none');
      }, 1);

      return () => clearTimeout(transitionTimeout);
    } else {
      localStorage.setItem('isIncludedAaminTheme', false);
    }

  }, [theme, location.pathname]);

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
}

export const useThemeProvider = () => useContext(ThemeContext);