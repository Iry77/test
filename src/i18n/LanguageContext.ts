import { createContext } from 'react';
import type { Dictionary, Locale } from './types';

export interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
