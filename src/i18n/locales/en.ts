import type { Dictionary } from '../types';

export const en: Dictionary = {
  intlLocale: 'en-GB',
  meta: {
    title: 'Iry RABEHAJA — Software Engineering Student',
    description:
      'Portfolio of Iry RABEHAJA, software engineering apprentice at ESIEA — data engineering, application development and analytics.',
  },
  ui: {
    skipToContent: 'Skip to content',
    nav: {
      label: 'Sections',
      open: 'Open navigation',
      close: 'Close navigation',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      interests: 'Interests',
      contact: 'Contact',
    },
    theme: {
      label: 'Colour theme',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      toSystem: 'Follow system theme',
      system: 'System',
      light: 'Light',
      dark: 'Dark',
    },
    language: { label: 'Language', switchTo: 'Passer en français' },
    hero: {
      greeting: 'Hi, I’m',
      role: 'Software engineering apprentice · Data & development',
      ctaPrimary: 'Explore my work',
      ctaSecondary: 'Get in touch',
      photoAlt: 'Portrait of Iry RABEHAJA smiling, wearing a navy blazer and a pink shirt',
      scrollHint: 'Scroll to discover',
    },
    about: {
      eyebrow: 'About',
      title: 'Beyond the first impression',
      languagesTitle: 'Languages',
      basedIn: 'Based in',
      studying: 'Studying at',
    },
    skills: { eyebrow: 'Skills', title: 'A versatile toolbox', opensInNewTab: 'opens in a new tab' },
    experience: { eyebrow: 'Experience', title: 'Professional journey', stack: 'Tech stack', internship: 'Internship' },
    education: {
      eyebrow: 'Education',
      title: 'Education & degrees',
      ongoing: 'In progress',
      upcoming: 'Upcoming',
      completed: 'Completed',
      honors: 'Honours:',
      visit: 'Visit website',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected university projects',
      subtitle: 'Projects built during my bachelor’s degree, from web platforms to games.',
      academic: 'Academic project',
    },
    interests: { eyebrow: 'Interests', title: 'Off the keyboard' },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      subtitle: 'Looking for an apprentice who ships reliable data and software? My inbox is open.',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      copy: 'Copy email address',
      copied: 'Copied!',
      sendEmail: 'Send me an email',
      social: { linkedin: 'LinkedIn', github: 'GitHub' },
    },
    footer: { builtWith: 'Built with React, TypeScript & Tailwind CSS.', backToTop: 'Back to top', rights: 'All rights reserved.' },
    dates: { present: 'Present', to: '–' },
  },
  content: {
    hero: {
      title: 'A student dedicated to…',
      titleHighlight: 'surprising you.',
      description:
        'You probably completed that sentence automatically. But in computer science, as in life, shortcuts often lead to errors. I invite you to go beyond the first impression: explore this portfolio, and then form your own opinion.',
    },
    about: {
      text: 'Hello everyone, my name is Iry RABEHAJA. Currently at ESIEA, I specifically chose this program to become a software engineer. It allows me to develop solid technical skills while continuing to grow professionally through a work-study apprenticeship.',
    },
    skills: {
      description:
        'My curriculum at IUT Orsay didn’t just teach me how to code. It allowed me to develop real versatility, ranging from application development to data analysis.',
      categories: {
        languages: 'Development & Languages',
        frameworks: 'Frameworks',
        data: 'Data & Databases',
        tooling: 'Environment & Tools',
      },
    },
    experience: {
      'iecd-data-warehouse': {
        role: 'Data Developer / Data Analyst',
        companyFull: 'IECD — European Institute for Cooperation and Development',
        missions: [
          {
            title: 'Financial data warehouse',
            detail: 'Centralised and hardened financial data into a single source of truth on PostgreSQL.',
          },
          {
            title: 'Budget entry automation',
            detail:
              'Built a VBA / Power Query tool letting management controllers enter and synchronise their forecasts directly.',
          },
          {
            title: 'Reporting design',
            detail: 'Automated the data flows feeding financial decision-support dashboards.',
          },
        ],
      },
      'iecd-etl': {
        role: 'Data Developer / Data Analyst',
        companyFull: 'IECD — European Institute for Cooperation and Development',
        missions: [
          {
            title: 'Automation & ETL (Python/SQL)',
            detail:
              'Designed Python scripts to extract, transform and load heterogeneous data (Excel, SAGE) into a PostgreSQL database.',
          },
          {
            title: 'Data management & APIs',
            detail: 'Developed API connectors for dynamic collection and optimised data volumes during the migration.',
          },
          {
            title: 'Data visualisation',
            detail: 'Turned the processed data into analyses and reporting with Power BI.',
          },
        ],
      },
    },
    education: {
      esiea: {
        degree: 'Engineering Degree (Apprenticeship)',
        specialty: 'Computer Science & Digital Technologies',
        institution: 'ESIEA',
      },
      'iut-orsay': {
        degree: 'Bachelor in Computer Science',
        specialty: 'Application Development',
        institution: 'Paris-Saclay University — IUT Orsay',
      },
      baccalaureate: {
        degree: 'French General Baccalaureate',
        honors: 'Assez Bien (with merit)',
        institution: 'Alliance Française of Antananarivo, Madagascar',
      },
    },
    projects: {
      'democracy-platform': {
        name: 'Participatory Democracy Web Platform',
        description: 'A complete web platform allowing users to submit, debate and vote on ideas.',
      },
      'math-shooter': {
        name: 'Educational Video Game',
        description:
          'An educational “shoot ’em up” combining maths practice and fun, with progressive difficulty management.',
      },
      'olympics-tracker': {
        name: 'Paris 2024 Olympics Tracker',
        description: 'A responsive app with a URL parameter decoder for following the 2024 Olympic Games competitions.',
      },
    },
    interests: {
      music: { title: 'Music', subtitle: '5 years of practice · piano & guitar' },
      'team-sports': { title: 'Team sports', subtitle: 'Football & basketball' },
      chess: { title: 'Chess', subtitle: 'Elo 1000' },
      anime: { title: 'Anime / Manga', subtitle: 'Kaguya-sama, KonoSuba, Naruto' },
      'video-games': { title: 'Video games', subtitle: 'Genshin Impact, Inazuma Eleven' },
    },
    languages: { english: 'English', spanish: 'Spanish' },
    contact: { address: '1 rue du Beau Site, 91440 Bures-sur-Yvette, France' },
  },
};
