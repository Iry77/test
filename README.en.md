# Iry RABEHAJA — Portfolio

> 🇫🇷 Version française : [README.md](./README.md)

A bilingual (EN / FR), theme-aware, accessible personal portfolio built with **React 18 + TypeScript (strict)**, **Vite 6**, **Tailwind CSS 3**, **Framer Motion 11** and **Lucide React**.

## Features

- **Right-hand navigation rail** (desktop ≥ 1024 px): floating pill with icon links, hover/focus labels, and an animated active indicator driven by an `IntersectionObserver` scroll spy.
- **Mobile / tablet drawer**: a floating action button opens a right-side slide-over modal with a focus trap, `Escape` to close, scroll lock and focus restore.
- **Theme engine**: follows `prefers-color-scheme` live. A manual override cycles *System → Light → Dark* and is saved in `localStorage`. An inline script in `index.html` applies the theme before first paint, so there is no flash of the wrong theme.
- **Bilingual EN / FR**: all copy lives in typed dictionaries (`src/i18n/locales/en.ts`, `fr.ts`). A missing key in either locale is a compile error. `<html lang>`, `<title>` and the meta description update when the language changes, and dates are formatted with `Intl`.
- **Motion**: scroll reveals, staggered grids, a self-drawing timeline and micro-interactions. `<MotionConfig reducedMotion="user">` plus a CSS fallback respect `prefers-reduced-motion`.
- **Accessibility**: skip link, landmark sections with `aria-labelledby`, `aria-current` on the active nav item, visible focus rings, and screen-reader labels on icon buttons. Colour tokens are checked against WCAG AA (ratios are listed in `src/index.css`).
- **Resilient media**: images that are missing or fail to load fall back to designed placeholders, so the site never shows a broken-image icon.

## File tree

```
.
├── index.html                  # Meta tags + no-flash theme/locale bootstrap script
├── package.json
├── tailwind.config.ts          # Colour tokens mapped to CSS variables
├── postcss.config.js
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts              # `@/` alias, vendor chunk splitting
├── public/
│   ├── favicon.svg, logo.svg
│   ├── images/profile.{webp,jpg}
│   └── icons/tech/*.svg        # Devicon SVGs (MIT, see LICENSE-devicon.txt)
└── src/
    ├── main.tsx                # Providers + root
    ├── App.tsx                 # Page composition + scroll spy + MotionConfig
    ├── index.css               # Design tokens (light/dark), base + component layers
    ├── types/portfolio.ts      # Domain model, id unions (SectionId, TechId, …)
    ├── data/portfolioData.ts   # Language-agnostic profile data (single source of truth)
    ├── i18n/
    │   ├── types.ts            # Dictionary interface, Locale type
    │   ├── locales/en.ts, fr.ts
    │   ├── dictionaries.ts
    │   ├── LanguageContext.ts, LanguageProvider.tsx, useTranslation.ts
    ├── theme/
    │   ├── ThemeContext.ts, ThemeProvider.tsx, useTheme.ts
    ├── hooks/                  # useScrollSpy, usePortfolio, useCopyToClipboard
    ├── lib/                    # cn, dates (Intl formatting + status), motion presets, safe storage
    └── components/
        ├── layout/             # SideNav, MobileNav, Header, Footer, SkipLink, navItems
        ├── ui/                 # Section, Reveal, TechBadge, SmartImage, Theme/Language toggles, BrandIcons
        └── sections/           # Hero, About, Skills, Experience, Education, Projects, Interests, Contact
```

### How content is organised

| What | Where |
| --- | --- |
| Links, dates, tech stacks, image paths, contact details | `src/data/portfolioData.ts` |
| Every human-readable string (UI + profile text) | `src/i18n/locales/{en,fr}.ts` |
| Ids that connect the two (`ExperienceId`, `ProjectId`, …) | `src/types/portfolio.ts` |

To add a project: add an id to `ProjectId`, add an entry to `portfolioData.projects`, then add its `name`/`description` to **both** locale files. TypeScript reports anything you forget.

## Setup

### Prerequisites

- **Node.js ≥ 20.19** (22 LTS recommended; `.nvmrc` is provided, so `nvm use` works)
- **npm ≥ 10** (bundled with Node)

### Install and run

```bash
npm install          # install dependencies
npm run dev          # http://localhost:5173 with hot reload
```

### Quality gates and production build

```bash
npm run typecheck    # strict TypeScript, no emit
npm run build        # type-check + optimised bundle in dist/
npm run preview      # serve dist/ at http://localhost:4173 to validate the build
```

Before deploying, check these in `npm run preview`:

1. Toggle the theme to *Light* or *Dark* and reload: the choice persists with no flash.
2. Switch EN/FR: all text, dates, `<title>` and `<html lang>` update.
3. Turn on "Reduce motion" in the OS: content appears without sliding.
4. Narrow the window below 1024 px: the right rail is replaced by the menu button and drawer.
5. Run a Lighthouse audit in Chrome DevTools (Accessibility and Best Practices).

### Deploy

`dist/` is a static site that can be hosted anywhere:

- **Vercel / Netlify**: framework preset "Vite", build command `npm run build`, output directory `dist`.
- **GitHub Pages**: if the site is served from a sub-path (`https://<user>.github.io/<repo>/`), set `base: '/<repo>/'` in `vite.config.ts`, then publish `dist/`.

## Adding your own images

The data already references these files. Drop them into `public/images/` and they appear automatically; until then, placeholders are shown.

| File | Used for |
| --- | --- |
| `logo_iecd.png` | Experience entries |
| `esiea.jpg`, `upsaclay_iut_orsay.jpg`, `apeaf.jpeg` | Education card banners |
| `MATH.png`, `JO2024.png` | Project thumbnails |
| `piano.jpg`, `guitare.jpg`, `football.jpg`, `basket.jpg`, `echecs.jpg`, `kaguya-sama-love-is-war.jpg`, `konosuba.jpg`, `Naruto.jpg`, `genshin-impact.webp`, `inazuma-eleven.jpg` | Interest cards (hover backdrop) |

Excel, Access, Power BI, SPARQL and SQL/Oracle use monogram badges. To use a logo instead, add an SVG to `public/icons/tech/` and set its `icon` field in `portfolioData.ts`.
