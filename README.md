# Levon Babagulyan — Portfolio

A production-ready personal portfolio for **Levon Babagulyan**, Frontend Developer. Built with a scalable, senior-level architecture and a modern, accessible, responsive UI.

## Tech stack

- **Framework:** Next.js (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config, class-based dark mode)
- **Animation:** Framer Motion
- **Forms:** React Hook Form
- **Data/async state:** TanStack Query
- **Global UI state:** Zustand
- **Icons:** lucide-react (+ custom brand icons)

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # lint the codebase
```

## Architecture

```
src/
├── app/                  # App Router entry, layout, SEO routes (sitemap, robots, manifest, OG image)
├── components/
│   ├── ui/               # Reusable primitives (Button, Card, Section, Badge, Reveal, ThemeToggle…)
│   ├── common/           # Composed app pieces (Navbar, Footer, Logo, SocialLinks, ScrollProgress)
│   └── providers/        # App-wide client providers (TanStack Query + theme hydration)
├── sections/             # Page sections (Hero, About, Experience, Skills, Projects, Contact)
├── data/                 # Typed content (profile, experience, skills, projects, socials, navigation)
├── hooks/                # Custom hooks (useActiveSection, useMediaQuery, useMounted, useContactForm…)
├── lib/                  # cn(), animations, Zustand store, site config, contact logic
└── types/                # Shared TypeScript interfaces
```

### Design principles

- **Separation of concerns** — content lives in `data/`, logic in `hooks/`/`lib/`, UI stays presentational.
- **Reusable, small components** with clear TypeScript interfaces and a single responsibility.
- **Accessibility** — semantic HTML, correct heading hierarchy, skip link, focus-visible styles, ARIA, and `prefers-reduced-motion` support.
- **Performance** — mostly static generation, `next/font` optimization, minimal client JS, spring-based animations.
- **SEO** — metadata, Open Graph + Twitter cards, JSON-LD `Person` schema, dynamic OG image, `sitemap.xml`, `robots.txt`, and a web manifest.

## Customisation

- Content: edit files in `src/data/`.
- Colors / theme tokens: edit CSS variables in `src/app/globals.css`.
- Site/SEO config: edit `src/lib/site.ts`.
- Contact form: emails are sent via [Web3Forms](https://web3forms.com) (no backend). Create a free access key with your destination email and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`). Includes a honeypot for spam protection.
