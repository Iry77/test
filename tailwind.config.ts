import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/** Colors resolve to CSS variables (see src/index.css) so light/dark share one token set. */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        fg: token('fg'),
        muted: token('muted'),
        border: token('border'),
        accent: token('accent'),
        brand: token('brand'),
        'on-brand': token('on-brand'),
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk Variable', 'Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)',
        lift: '0 2px 4px rgb(0 0 0 / 0.04), 0 18px 40px -16px rgb(0 0 0 / 0.22)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
