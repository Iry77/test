import { createContext } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeContextValue {
  /** What the user chose. `system` follows `prefers-color-scheme`. */
  preference: ThemePreference;
  /** What is actually painted. */
  resolved: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
  /** Cycles system → light → dark → system. */
  cycle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
