'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { Locale } from './translations';

function getCookieLocale(): Locale {
  if (typeof document === 'undefined') return 'en';
  const m = document.cookie.match(/\blocale=(en|fr)\b/);
  return m ? (m[1] as Locale) : 'en';
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const initial = getCookieLocale();
    setLocale(initial);
    document.documentElement.lang = initial;
  }, []);

  const handleSetLocale = useCallback((l: Locale) => {
    setLocale(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
