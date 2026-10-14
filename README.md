# Iry RABEHAJA — Portfolio

> 🇬🇧 English version: [README.en.md](./README.en.md)

Portfolio personnel bilingue (FR / EN), compatible thème clair/sombre et accessible, construit avec **React 18 + TypeScript (mode strict)**, **Vite 6**, **Tailwind CSS 3**, **Framer Motion 11** et **Lucide React**.

## Fonctionnalités

- **Barre de navigation à droite** (ordinateur, ≥ 1024 px) : une pilule flottante avec des liens en icônes, un libellé au survol ou au focus clavier, et un indicateur animé qui suit la section affichée (détection par `IntersectionObserver`).
- **Tiroir de navigation mobile / tablette** : un bouton flottant ouvre un panneau latéral à droite. Le focus clavier y reste piégé, `Échap` le ferme, le défilement de la page est bloqué et le focus revient au bouton à la fermeture.
- **Thème clair / sombre** : suit `prefers-color-scheme` en direct. Le bouton de thème alterne *Système → Clair → Sombre* et le choix est enregistré dans `localStorage`. Un script dans `index.html` applique le thème avant le premier affichage : aucun flash du mauvais thème.
- **Bilingue FR / EN** : tous les textes sont dans des dictionnaires typés (`src/i18n/locales/fr.ts`, `en.ts`). Une clé manquante dans une langue est une erreur de compilation. Changer de langue met aussi à jour `<html lang>`, le `<title>`, la meta description et le format des dates (`Intl`).
- **Animations** : apparitions au défilement, grilles en cascade, frise chronologique qui se dessine et micro-interactions. `<MotionConfig reducedMotion="user">` et une règle CSS respectent `prefers-reduced-motion`.
- **Accessibilité** : lien d'évitement, sections balisées avec `aria-labelledby`, `aria-current` sur l'élément de navigation actif, anneaux de focus visibles et libellés pour lecteurs d'écran sur les boutons-icônes. Les couleurs respectent le niveau WCAG AA (ratios indiqués dans `src/index.css`).
- **Images robustes** : une image absente ou qui ne se charge pas est remplacée par un visuel de substitution, jamais par une icône d'image cassée.

## Arborescence

```
.
├── index.html                  # Balises meta + script d'initialisation thème/langue
├── package.json
├── tailwind.config.ts          # Couleurs reliées aux variables CSS
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts              # Alias `@/`, découpage des bundles
├── public/
│   ├── favicon.svg, logo.svg
│   ├── images/profile.{webp,jpg}
│   └── icons/tech/*.svg        # Icônes Devicon (MIT, voir LICENSE-devicon.txt)
└── src/
    ├── main.tsx                # Providers + racine
    ├── App.tsx                 # Composition de la page, détection de section, MotionConfig
    ├── index.css               # Variables de couleur (clair/sombre), styles de base et composants
    ├── types/portfolio.ts      # Modèle de données, identifiants (SectionId, TechId, …)
    ├── data/portfolioData.ts   # Données indépendantes de la langue (source unique)
    ├── i18n/
    │   ├── types.ts            # Interface Dictionary, type Locale
    │   ├── locales/en.ts, fr.ts
    │   ├── dictionaries.ts
    │   ├── LanguageContext.ts, LanguageProvider.tsx, useTranslation.ts
    ├── theme/
    │   ├── ThemeContext.ts, ThemeProvider.tsx, useTheme.ts
    ├── hooks/                  # useScrollSpy, usePortfolio, useCopyToClipboard
    ├── lib/                    # cn, dates (format Intl + statut), animations, stockage sécurisé
    └── components/
        ├── layout/             # SideNav, MobileNav, Header, Footer, SkipLink, navItems
        ├── ui/                 # Section, Reveal, TechBadge, SmartImage, boutons thème/langue, BrandIcons
        └── sections/           # Hero, About, Skills, Experience, Education, Projects, Interests, Contact
```

### Organisation du contenu

| Quoi | Où |
| --- | --- |
| Liens, dates, technologies, chemins d'images, coordonnées | `src/data/portfolioData.ts` |
| Tous les textes lisibles (interface + profil) | `src/i18n/locales/{fr,en}.ts` |
| Identifiants qui relient les deux (`ExperienceId`, `ProjectId`, …) | `src/types/portfolio.ts` |

Pour ajouter un projet : ajoutez un identifiant à `ProjectId`, une entrée dans `portfolioData.projects`, puis son `name` et sa `description` dans **les deux** fichiers de langue. TypeScript signale tout oubli.

## Installation

### Prérequis

- **Node.js ≥ 20.19** (22 LTS recommandé ; un fichier `.nvmrc` est fourni, donc `nvm use` fonctionne)
- **npm ≥ 10** (installé avec Node)

### Installer et lancer

```bash
npm install          # installe les dépendances
npm run dev          # http://localhost:5173 avec rechargement à chaud
```

### Vérifications et build de production

```bash
npm run typecheck    # TypeScript strict, sans génération de fichiers
npm run build        # vérification des types + bundle optimisé dans dist/
npm run preview      # sert dist/ sur http://localhost:4173 pour valider le build
```

Avant de déployer, vérifiez dans `npm run preview` :

1. Passez le thème en *Clair* ou *Sombre* puis rechargez : le choix est conservé, sans flash.
2. Basculez FR/EN : les textes, les dates, le `<title>` et `<html lang>` changent.
3. Activez « Réduire les animations » dans le système : le contenu apparaît sans glisser.
4. Réduisez la fenêtre sous 1024 px : la barre de droite est remplacée par le bouton menu et le tiroir.
5. Lancez un audit Lighthouse dans les DevTools de Chrome (Accessibilité et Bonnes pratiques).

### Déploiement

`dist/` est un site statique, hébergeable n'importe où :

- **Vercel / Netlify** : préréglage « Vite », commande de build `npm run build`, dossier de sortie `dist`.
- **GitHub Pages** : si le site est servi depuis un sous-chemin (`https://<utilisateur>.github.io/<repo>/`), ajoutez `base: '/<repo>/'` dans `vite.config.ts`, puis publiez `dist/`.

## Ajouter vos images

Les données font déjà référence à ces fichiers. Déposez-les dans `public/images/` et ils s'afficheront automatiquement ; d'ici là, des visuels de substitution sont affichés.

| Fichier | Utilisé pour |
| --- | --- |
| `logo_iecd.png` | Expériences |
| `esiea.jpg`, `upsaclay_iut_orsay.jpg`, `apeaf.jpeg` | Bannières des cartes Formation |
| `MATH.png`, `JO2024.png` | Vignettes des projets |
| `piano.jpg`, `guitare.jpg`, `football.jpg`, `basket.jpg`, `echecs.jpg`, `kaguya-sama-love-is-war.jpg`, `konosuba.jpg`, `Naruto.jpg`, `genshin-impact.webp`, `inazuma-eleven.jpg` | Cartes Centres d'intérêt (fond au survol) |

Excel, Access, Power BI, SPARQL et SQL/Oracle utilisent des badges à initiales. Pour afficher un logo à la place, ajoutez un SVG dans `public/icons/tech/` et renseignez son champ `icon` dans `portfolioData.ts`.
