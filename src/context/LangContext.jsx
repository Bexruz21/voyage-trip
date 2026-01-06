'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import ru from '@/messages/ru.json';
import en from '@/messages/en.json';
import uz from '@/messages/uz.json';

const LangContext = createContext();

const messagesMap = { ru, en, uz };

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) setLang(saved);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (path) => {
    return path.split('.').reduce(
      (obj, key) => obj?.[key],
      messagesMap[lang]
    ) ?? path;
  };

  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
