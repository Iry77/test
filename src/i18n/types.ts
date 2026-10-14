import type { LocalizedContent, SectionId, SocialId } from '@/types/portfolio';

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value);

/** Every locale file must satisfy this shape — missing keys are compile errors. */
export interface Dictionary {
  /** BCP 47 tag used for `<html lang>` and `Intl` formatting. */
  intlLocale: string;
  meta: { title: string; description: string };
  ui: {
    skipToContent: string;
    nav: Record<SectionId, string> & { label: string; open: string; close: string };
    theme: { label: string; toLight: string; toDark: string; toSystem: string; system: string; light: string; dark: string };
    language: { label: string; switchTo: string };
    hero: { greeting: string; role: string; ctaPrimary: string; ctaSecondary: string; photoAlt: string; scrollHint: string };
    about: { eyebrow: string; title: string; languagesTitle: string; basedIn: string; studying: string };
    skills: { eyebrow: string; title: string; opensInNewTab: string };
    experience: { eyebrow: string; title: string; stack: string; internship: string };
    education: { eyebrow: string; title: string; ongoing: string; upcoming: string; completed: string; honors: string; visit: string };
    projects: { eyebrow: string; title: string; subtitle: string; academic: string };
    interests: { eyebrow: string; title: string };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      email: string;
      phone: string;
      address: string;
      copy: string;
      copied: string;
      sendEmail: string;
      social: Record<SocialId, string>;
    };
    footer: { builtWith: string; backToTop: string; rights: string };
    dates: { present: string; to: string };
  };
  content: LocalizedContent;
}
