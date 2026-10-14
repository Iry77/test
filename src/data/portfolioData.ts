import type { PortfolioData, TechId, Technology } from '@/types/portfolio';

/**
 * Single source of truth for language-agnostic profile data.
 * Translatable text is in `src/i18n/locales/*.ts`, keyed by the ids used here.
 *
 * Images: drop files into `public/images/...` with the names below. Anything missing
 * degrades gracefully to an illustrated placeholder, so the site never shows a broken image.
 */

const technologies = {
  python: { name: 'Python', icon: '/icons/tech/python.svg', url: 'https://www.python.org/' },
  java: { name: 'Java', icon: '/icons/tech/java.svg', url: 'https://www.java.com/' },
  javascript: {
    name: 'JavaScript',
    icon: '/icons/tech/javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  typescript: { name: 'TypeScript', icon: '/icons/tech/typescript.svg', url: 'https://www.typescriptlang.org/' },
  php: { name: 'PHP', icon: '/icons/tech/php.svg', url: 'https://www.php.net/' },
  csharp: { name: 'C#', icon: '/icons/tech/csharp.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  cpp: { name: 'C++', icon: '/icons/tech/cpp.svg', url: 'https://isocpp.org/' },
  c: { name: 'C', icon: '/icons/tech/c.svg', url: 'https://en.cppreference.com/w/c' },
  html5: { name: 'HTML5', icon: '/icons/tech/html5.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  css3: { name: 'CSS3', icon: '/icons/tech/css3.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  react: { name: 'React', icon: '/icons/tech/react.svg', url: 'https://react.dev/' },
  tailwind: { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg', url: 'https://tailwindcss.com/' },
  django: { name: 'Django', icon: '/icons/tech/django.svg', url: 'https://www.djangoproject.com/' },
  postgresql: { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg', url: 'https://www.postgresql.org/' },
  sql: { name: 'SQL / Oracle', monogram: 'SQL', url: 'https://www.oracle.com/database/sqldeveloper/' },
  sparql: { name: 'SPARQL', monogram: 'SP', url: 'https://www.w3.org/TR/sparql11-query/' },
  excel: { name: 'Excel', monogram: 'XL', url: 'https://www.microsoft.com/excel' },
  access: { name: 'Access', monogram: 'AC', url: 'https://www.microsoft.com/access' },
  powerbi: { name: 'Power BI', url: 'https://powerbi.microsoft.com/' },
  docker: { name: 'Docker', icon: '/icons/tech/docker.svg', url: 'https://www.docker.com/' },
  linux: { name: 'Linux', icon: '/icons/tech/linux.svg', url: 'https://www.linux.org/' },
  windows: { name: 'Windows', icon: '/icons/tech/windows11.svg', url: 'https://www.microsoft.com/windows' },
  bash: { name: 'Bash / Shell', icon: '/icons/tech/bash.svg', url: 'https://www.gnu.org/software/bash/' },
  gdscript: { name: 'GDScript', icon: '/icons/tech/godot.svg', url: 'https://gdscript.com/' },
} as const satisfies Record<TechId, Technology>;

export const portfolioData: PortfolioData = {
  identity: {
    firstName: 'Iry',
    lastName: 'RABEHAJA',
    photo: { webp: '/images/profile.webp', fallback: '/images/profile.jpg', width: 720, height: 780 },
    logo: '/logo.svg',
  },

  contact: {
    email: 'iryrabehaja@gmail.com',
    phone: '07 69 79 39 69',
    phoneHref: '+33769793969',
    address: '1 rue du Beau Site, 91440 Bures-sur-Yvette',
    city: 'Bures-sur-Yvette (91)',
    socials: [
      { id: 'linkedin', handle: 'Iry Rabehaja', href: 'https://www.linkedin.com/in/iry-rabehaja-96325b329' },
      { id: 'github', handle: '@lry77', href: 'https://github.com/lry77' },
    ],
  },

  technologies,

  skillCategories: [
    { id: 'languages', items: ['python', 'java', 'javascript', 'typescript', 'php', 'csharp', 'cpp', 'c', 'html5', 'css3'] },
    { id: 'frameworks', items: ['react', 'tailwind', 'django'] },
    { id: 'data', items: ['postgresql', 'sql', 'sparql', 'excel', 'access', 'powerbi'] },
    { id: 'tooling', items: ['docker', 'linux', 'windows', 'bash'] },
  ],

  experience: [
    {
      id: 'iecd-data-warehouse',
      company: 'IECD',
      location: 'Montrouge (92)',
      logo: '/images/logo_iecd.png',
      period: { start: '2026-01', end: '2026-05' },
      stack: ['sql', 'postgresql', 'powerbi', 'excel'],
    },
    {
      id: 'iecd-etl',
      company: 'IECD',
      location: 'Montrouge (92)',
      logo: '/images/logo_iecd.png',
      period: { start: '2025-04', end: '2025-07' },
      stack: ['python', 'sql', 'postgresql', 'powerbi', 'excel'],
    },
  ],

  education: [
    {
      id: 'esiea',
      institution: 'ESIEA',
      href: 'https://www.esiea.fr/',
      image: '/images/esiea.jpg',
      period: { start: '2026-09', end: '2029-07' },
    },
    {
      id: 'iut-orsay',
      institution: 'IUT Orsay',
      href: 'https://www.iut-orsay.universite-paris-saclay.fr/',
      image: '/images/upsaclay_iut_orsay.jpg',
      period: { start: '2023-09', end: '2026-07' },
    },
    {
      id: 'baccalaureate',
      institution: 'APEAF',
      href: 'https://www.apeaf.mg/',
      image: '/images/apeaf.jpeg',
      period: { start: '2023-07' },
    },
  ],

  projects: [
    { id: 'democracy-platform', stack: ['php', 'sql'] },
    { id: 'math-shooter', stack: ['java', 'gdscript'], image: '/images/MATH.png' },
    { id: 'olympics-tracker', stack: ['html5', 'css3'], image: '/images/JO2024.png' },
  ],

  interests: [
    { id: 'music', icon: 'music', images: ['/images/piano.jpg', '/images/guitare.jpg'] },
    { id: 'team-sports', icon: 'sports', images: ['/images/football.jpg', '/images/basket.jpg'] },
    { id: 'chess', icon: 'chess', images: ['/images/echecs.jpg'] },
    {
      id: 'anime',
      icon: 'anime',
      images: ['/images/kaguya-sama-love-is-war.jpg', '/images/konosuba.jpg', '/images/Naruto.jpg'],
    },
    { id: 'video-games', icon: 'gaming', images: ['/images/genshin-impact.webp', '/images/inazuma-eleven.jpg'] },
  ],

  languages: [
    { id: 'english', level: 'B2' },
    { id: 'spanish', level: 'A1' },
  ],
};
