'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'fr';
export type Theme = 'dark' | 'light';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load stored language preference (defaulting to 'en')
    const savedLang = localStorage.getItem('portfolio_lang') as Language;
    if (savedLang === 'en' || savedLang === 'fr') {
      setLanguageState(savedLang);
    } else {
      setLanguageState('en');
    }

    // Load stored theme preference (defaulting to 'dark')
    const savedTheme = localStorage.getItem('portfolio_theme') as Theme;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme);
    } else {
      setThemeState('dark');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('portfolio_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
