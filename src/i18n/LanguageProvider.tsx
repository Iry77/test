import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { safeStorage } from '@/lib/storage';
import { dictionaries } from './dictionaries';
import { LanguageContext } from './LanguageContext';
import { isLocale, type Locale } from './types';

/** Must match the inline bootstrap script in index.html. */
export const LOCALE_STORAGE_KEY = 'portfolio:locale';

const detectLocale = (): Locale => {
  const stored = safeStorage.get(LOCALE_STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const browser = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return browser.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);
  const t = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [locale, t]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    safeStorage.set(LOCALE_STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => setLocale(locale === 'en' ? 'fr' : 'en'), [locale, setLocale]);

  const value = useMemo(() => ({ locale, t, setLocale, toggleLocale }), [locale, t, setLocale, toggleLocale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
