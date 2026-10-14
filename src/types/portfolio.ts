/**
 * Domain model for the portfolio.
 *
 * Content is split in two layers:
 *  - Language-agnostic data (ids, links, dates, assets, tech stacks) lives in `src/data/portfolioData.ts`.
 *  - Human-readable text lives in the locale dictionaries (`src/i18n/locales/{en,fr}.ts`),
 *    keyed by the ids declared below. TypeScript enforces that every locale covers every id.
 */

export const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'education',
  'projects',
  'interests',
  'contact',
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const TECH_IDS = [
  'python',
  'java',
  'javascript',
  'typescript',
  'php',
  'csharp',
  'cpp',
  'c',
  'html5',
  'css3',
  'react',
  'tailwind',
  'django',
  'postgresql',
  'sql',
  'sparql',
  'excel',
  'access',
  'powerbi',
  'docker',
  'linux',
  'windows',
  'bash',
  'gdscript',
] as const;
export type TechId = (typeof TECH_IDS)[number];

export type SkillCategoryId = 'languages' | 'frameworks' | 'data' | 'tooling';
export type ExperienceId = 'iecd-data-warehouse' | 'iecd-etl';
export type EducationId = 'esiea' | 'iut-orsay' | 'baccalaureate';
export type ProjectId = 'democracy-platform' | 'math-shooter' | 'olympics-tracker';
export type InterestId = 'music' | 'team-sports' | 'chess' | 'anime' | 'video-games';
export type SpokenLanguageId = 'english' | 'spanish';
export type SocialId = 'linkedin' | 'github';

/** ISO-like month string, e.g. `2026-01`. */
export type YearMonth = `${number}-${number}`;

export interface DateRange {
  start: YearMonth;
  /** Omit for a single point in time (e.g. a graduation date). */
  end?: YearMonth;
}

/* ------------------------------------------------------------------ */
/* Language-agnostic data                                              */
/* ------------------------------------------------------------------ */

export interface Technology {
  name: string;
  /** Path under `/public`. When missing or failing to load, a monogram is rendered. */
  icon?: string;
  /** Overrides the auto-generated monogram used when there is no icon. */
  monogram?: string;
  url: string;
}

export interface SocialLink {
  id: SocialId;
  handle: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  /** E.164 format used for the `tel:` link. */
  phoneHref: string;
  address: string;
  /** Short location shown in the About section. */
  city: string;
  socials: readonly SocialLink[];
}

export interface Identity {
  firstName: string;
  lastName: string;
  photo: { webp: string; fallback: string; width: number; height: number };
  logo: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  items: readonly TechId[];
}

export interface ExperienceEntry {
  id: ExperienceId;
  company: string;
  location: string;
  logo?: string;
  period: DateRange;
  stack: readonly TechId[];
}

export interface EducationEntry {
  id: EducationId;
  institution: string;
  href: string;
  image?: string;
  period: DateRange;
}

export interface ProjectEntry {
  id: ProjectId;
  stack: readonly TechId[];
  image?: string;
}

export type InterestIcon = 'music' | 'sports' | 'chess' | 'anime' | 'gaming';

export interface InterestEntry {
  id: InterestId;
  icon: InterestIcon;
  images: readonly string[];
}

export interface SpokenLanguage {
  id: SpokenLanguageId;
  /** CEFR level. */
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native';
}

export interface PortfolioData {
  identity: Identity;
  contact: ContactInfo;
  technologies: Readonly<Record<TechId, Technology>>;
  skillCategories: readonly SkillCategory[];
  experience: readonly ExperienceEntry[];
  education: readonly EducationEntry[];
  projects: readonly ProjectEntry[];
  interests: readonly InterestEntry[];
  languages: readonly SpokenLanguage[];
}

/* ------------------------------------------------------------------ */
/* Localized content                                                   */
/* ------------------------------------------------------------------ */

export interface Mission {
  title: string;
  detail: string;
}

export interface LocalizedContent {
  hero: { title: string; titleHighlight: string; description: string };
  about: { text: string };
  skills: { description: string; categories: Record<SkillCategoryId, string> };
  experience: Record<ExperienceId, { role: string; companyFull: string; missions: readonly Mission[] }>;
  education: Record<EducationId, { degree: string; specialty?: string; honors?: string; institution: string }>;
  projects: Record<ProjectId, { name: string; description: string }>;
  interests: Record<InterestId, { title: string; subtitle?: string }>;
  languages: Record<SpokenLanguageId, string>;
  contact: { address: string };
}
