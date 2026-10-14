import type { Dictionary } from '../types';

export const fr: Dictionary = {
  intlLocale: 'fr-FR',
  meta: {
    title: 'Iry RABEHAJA — Étudiant ingénieur logiciel',
    description:
      'Portfolio d’Iry RABEHAJA, apprenti ingénieur logiciel à l’ESIEA — ingénierie des données, développement applicatif et analyse.',
  },
  ui: {
    skipToContent: 'Aller au contenu',
    nav: {
      label: 'Sections',
      open: 'Ouvrir la navigation',
      close: 'Fermer la navigation',
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Formation',
      projects: 'Projets',
      interests: 'Centres d’intérêt',
      contact: 'Contact',
    },
    theme: {
      label: 'Thème',
      toLight: 'Passer au thème clair',
      toDark: 'Passer au thème sombre',
      toSystem: 'Suivre le thème du système',
      system: 'Système',
      light: 'Clair',
      dark: 'Sombre',
    },
    language: { label: 'Langue', switchTo: 'Switch to English' },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Apprenti ingénieur logiciel · Data & développement',
      ctaPrimary: 'Découvrir mon travail',
      ctaSecondary: 'Me contacter',
      photoAlt: 'Portrait d’Iry RABEHAJA souriant, en blazer bleu marine et chemise rose',
      scrollHint: 'Faites défiler pour découvrir',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Au-delà de la première impression',
      languagesTitle: 'Langues',
      basedIn: 'Basé à',
      studying: 'Étudiant à',
    },
    skills: { eyebrow: 'Compétences', title: 'Une boîte à outils polyvalente', opensInNewTab: 's’ouvre dans un nouvel onglet' },
    experience: { eyebrow: 'Expérience', title: 'Parcours professionnel', stack: 'Environnement technique', internship: 'Stage' },
    education: {
      eyebrow: 'Formation',
      title: 'Formation & diplômes',
      ongoing: 'En cours',
      upcoming: 'À venir',
      completed: 'Obtenu',
      honors: 'Mention :',
      visit: 'Voir le site',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Projets universitaires',
      subtitle: 'Des projets réalisés pendant mon bachelor, des plateformes web aux jeux vidéo.',
      academic: 'Projet universitaire',
    },
    interests: { eyebrow: 'Centres d’intérêt', title: 'Loin du clavier' },
    contact: {
      eyebrow: 'Contact',
      title: 'Discutons',
      subtitle: 'Vous cherchez un alternant fiable, côté données comme côté code ? Ma boîte mail est ouverte.',
      email: 'E-mail',
      phone: 'Téléphone',
      address: 'Adresse',
      copy: 'Copier l’adresse e-mail',
      copied: 'Copié !',
      sendEmail: 'M’envoyer un e-mail',
      social: { linkedin: 'LinkedIn', github: 'GitHub' },
    },
    footer: {
      builtWith: 'Conçu avec React, TypeScript & Tailwind CSS.',
      backToTop: 'Retour en haut',
      rights: 'Tous droits réservés.',
    },
    dates: { present: 'Aujourd’hui', to: '–' },
  },
  content: {
    hero: {
      title: 'Étudiant voué à…',
      titleHighlight: 'vous surprendre.',
      description:
        'Vous avez sûrement complété cette phrase par automatisme. Mais en informatique comme dans la vie, les raccourcis mènent souvent à l’erreur. Je vous invite à dépasser la première impression : explorez ce portfolio, et faites-vous ensuite votre propre avis.',
    },
    about: {
      text: 'Bonjour à tous, je m’appelle Iry RABEHAJA. Actuellement à l’ESIEA, j’ai choisi spécialement cette formation pour devenir ingénieur logiciel. Elle me permet de développer des compétences techniques solides tout en continuant à progresser dans mon parcours professionnel en alternance.',
    },
    skills: {
      description:
        'Mon cursus à l’IUT d’Orsay ne m’a pas seulement appris à coder. Il m’a permis de développer une polyvalence réelle, allant du développement applicatif à l’analyse de données.',
      categories: {
        languages: 'Développement & Langages',
        frameworks: 'Frameworks',
        data: 'Data & Bases de données',
        tooling: 'Environnement & Outils',
      },
    },
    experience: {
      'iecd-data-warehouse': {
        role: 'Développeur Data / Data Analyst',
        companyFull: 'IECD — Institut Européen de Coopération et de Développement',
        missions: [
          {
            title: 'Data Warehouse financier',
            detail: 'Centralisation et fiabilisation des données vers une base unique sous PostgreSQL.',
          },
          {
            title: 'Automatisation de la saisie budgétaire',
            detail:
              'Création d’un outil VBA / Power Query permettant la saisie et la synchronisation directe des prévisions des contrôleurs de gestion.',
          },
          {
            title: 'Définition du reporting',
            detail: 'Automatisation des flux de données pour alimenter des tableaux de bord financiers d’aide à la décision.',
          },
        ],
      },
      'iecd-etl': {
        role: 'Développeur Data / Data Analyst',
        companyFull: 'IECD — Institut Européen de Coopération et de Développement',
        missions: [
          {
            title: 'Automatisation & ETL (Python/SQL)',
            detail:
              'Conception de scripts Python pour l’extraction, la transformation et le chargement automatique de données hétérogènes (Excel, SAGE) vers une base PostgreSQL.',
          },
          {
            title: 'Gestion de données & API',
            detail:
              'Développement de connecteurs API pour la collecte dynamique et l’optimisation des volumes de données lors de la migration.',
          },
          {
            title: 'Visualisation de données',
            detail: 'Exploitation des données traitées pour la mise en place d’analyses et de reportings via Power BI.',
          },
        ],
      },
    },
    education: {
      esiea: {
        degree: 'Cycle Ingénieur en Apprentissage',
        specialty: 'Informatique et Numérique',
        institution: 'ESIEA',
      },
      'iut-orsay': {
        degree: 'Bachelor Informatique',
        specialty: 'Développement d’applications',
        institution: 'Université Paris-Saclay — IUT d’Orsay',
      },
      baccalaureate: {
        degree: 'Baccalauréat général',
        honors: 'Assez Bien',
        institution: 'Alliance Française d’Antananarivo, Madagascar',
      },
    },
    projects: {
      'democracy-platform': {
        name: 'Plateforme web de démocratie participative',
        description: 'Une plateforme web complète permettant aux utilisateurs de soumettre, débattre et voter pour des idées.',
      },
      'math-shooter': {
        name: 'Conception d’un jeu vidéo',
        description:
          'Un « shoot ’em up » pédagogique associant apprentissage des mathématiques et divertissement, avec gestion de la difficulté progressive.',
      },
      'olympics-tracker': {
        name: 'Application de suivi des JO 2024',
        description:
          'Une application responsive avec décodeur de paramètres pour suivre les compétitions des Jeux Olympiques 2024.',
      },
    },
    interests: {
      music: { title: 'Musique', subtitle: '5 ans de pratique · piano & guitare' },
      'team-sports': { title: 'Sports en équipe', subtitle: 'Football & basket' },
      chess: { title: 'Échecs', subtitle: 'Elo 1000' },
      anime: { title: 'Anime / Manga', subtitle: 'Kaguya-sama, KonoSuba, Naruto' },
      'video-games': { title: 'Jeux vidéo', subtitle: 'Genshin Impact, Inazuma Eleven' },
    },
    languages: { english: 'Anglais', spanish: 'Espagnol' },
    contact: { address: '1 rue du Beau Site, 91440 Bures-sur-Yvette' },
  },
};
