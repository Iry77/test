import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { safeStorage } from '@/lib/storage';
import { ThemeContext, type ResolvedTheme, type ThemePreference } from './ThemeContext';

/** Must match the inline bootstrap script in index.html. */
export const THEME_STORAGE_KEY = 'portfolio:theme';
const MEDIA = '(prefers-color-scheme: dark)';
const ORDER: readonly ThemePreference[] = ['system', 'light', 'dark'];

const readPreference = (): ThemePreference => {
  const stored = safeStorage.get(THEME_STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
};

const systemTheme = (): ResolvedTheme =>
  typeof window !== 'undefined' && window.matchMedia(MEDIA).matches ? 'dark' : 'light';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(readPreference);
  const [system, setSystem] = useState<ResolvedTheme>(systemTheme);

  // Keep in sync with OS-level changes while the page is open.
  useEffect(() => {
    const query = window.matchMedia(MEDIA);
    const onChange = (event: MediaQueryListEvent) => setSystem(event.matches ? 'dark' : 'light');
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const resolved: ResolvedTheme = preference === 'system' ? system : preference;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', resolved === 'dark');
    root.style.colorScheme = resolved;
  }, [resolved]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    if (next === 'system') safeStorage.remove(THEME_STORAGE_KEY);
    else safeStorage.set(THEME_STORAGE_KEY, next);
  }, []);

  const cycle = useCallback(() => {
    const index = ORDER.indexOf(preference);
    setPreference(ORDER[(index + 1) % ORDER.length] ?? 'system');
  }, [preference, setPreference]);

  const value = useMemo(() => ({ preference, resolved, setPreference, cycle }), [preference, resolved, setPreference, cycle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
