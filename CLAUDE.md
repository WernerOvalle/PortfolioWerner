# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server with Turbopack (http://localhost:3000)
pnpm build    # Static export to /out directory
pnpm lint     # ESLint check
```

No test suite is configured. There is no `npm test` command.

## Architecture

This is a **Next.js static portfolio site** (`output: 'export'`) — a single page (`src/pages/index.js`) that assembles all sections. It uses **styled-components** for all styling (no Tailwind, no CSS modules except `hero.module.css`).

### Theme System (Dark/Light Mode)

The app has a dual-theme system:

- `src/contexts/ThemeContext.js` — React context providing `isDark` (default `true`) and `toggleTheme`. Persists to `localStorage` under key `portfolioTheme`.
- `src/themes/default.js` — dark theme object
- `src/themes/light.js` — light theme object
- `src/styles/theme.js` — wraps children in styled-components `ThemeProvider` using the active theme from context
- `src/pages/_app.js` — `ThemeContextProvider` wraps `Theme` which wraps the app

**Theme color tokens** (both themes must have all of these):
- `primary1` — main text color
- `background1` / `background2` — page bg / secondary bg (cards, highlights)
- `accent1` — orange accent
- `button` — blue button color
- `cardBg` — card backgrounds (white in light, same as bg1 in dark)
- `cardTitle` — card header color (`#9cc9e3` dark / `#1a6a99` light)
- `titleGradient` — CSS gradient for `SectionTitle` and `CarouselItemTitle` (white gradient dark / dark gradient light)
- `textMuted` / `textSubtle` / `textFaint` — rgba opacity variants of primary1
- `borderSubtle` / `borderMuted` — rgba opacity variants for borders

When adding new styled-components that need theme-awareness, always use `${props => props.theme.colors.TOKEN}` — never hardcode colors like `white`, `#fff`, or `rgba(255,255,255,...)`.

### Data / Content

All portfolio content lives in `src/constants/constants.js`: projects, certificates, timeline entries, technologies, research. To add/edit portfolio entries, edit only this file.

### Global Styles

- `src/styles/globals.js` — `createGlobalStyle` with normalize + body/html base styles. Font size base is `62.5%` (so `1rem = 10px`, `2rem = 20px`).
- `src/styles/GlobalComponents/index.js` — shared layout primitives: `Section`, `SectionTitle`, `SectionText`, `SectionSubText`, `SectionDivider`, `SecondaryBtn`, `ButtonBack`, `ButtonFront`, `LinkContainer`, `LinkIconImg`.

### Component Pattern

Each component lives in `src/components/ComponentName/` with:
- `ComponentName.js` — React component
- `ComponentNameStyles.js` — styled-components for that component

The `ThemeToggle` component (`src/components/ThemeToggle/ThemeToggle.js`) is the exception — it uses `useThemeContext` directly and renders a pill-shaped animated toggle with framer-motion.

### Static Export Notes

- `next.config.js` sets `output: 'export'` — no SSR, no API routes
- Images must be in `/public/images/` and referenced as `/images/filename.jpg`
- Image optimization is disabled (`unoptimized: true`)
- Build output goes to `/out/`
