# Personal Portfolio

A modern, responsive portfolio website built with Next.js 16 and React 19, featuring smooth animations and a clean design.

## Preview

![Portfolio Preview](https://i.imgur.com/3ot7j9n.png)

## Tech Stack

- **Next.js 16** - React framework, static export
- **React 19** - Latest React with concurrent features
- **Styled Components 6** - CSS-in-JS styling with dark/light theme
- **Framer Motion 12** - Advanced animations
- **React Icons 5** - Icon library
- **pnpm** - Fast, disk-efficient package manager with supply chain protection

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) — all development runs inside Docker

No Node.js installation required on your machine. Netlify deployment is configured automatically via `netlify.toml`.

## Local Development (Docker)

### Start the dev server

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000). Hot reload is active — save a file and the browser updates instantly.

### Stop the dev server

```bash
docker compose down
```

### Build the image (first time or after adding packages)

```bash
docker compose build
```

## Common Commands

All commands run inside the container — nothing is installed on your host machine.

| Task | Command |
|---|---|
| Start dev server | `docker compose up` |
| Stop dev server | `docker compose down` |
| Rebuild image | `docker compose build` |
| Update all deps to latest | `docker compose run --rm portfolio pnpm update --latest` |
| Add a package | `docker compose run --rm portfolio pnpm add <package>` |
| Run lint | `docker compose run --rm portfolio pnpm lint` |
| Audit for vulnerabilities | `docker compose run --rm portfolio pnpm audit --audit-level=high` |

After running `pnpm update --latest`, commit both `package.json` and `pnpm-lock.yaml` so Netlify picks up the updated versions.

## Deployment

Deployed on **Netlify**. Configuration in `netlify.toml`:

- Build command: `pnpm run build`
- Publish directory: `out`
- Node version: 22

Push to the main branch to trigger a deploy. Docker is not involved in the deployment process.

## Security

Dependencies are protected via `.npmrc`:

- `ignore-scripts=true` — blocks malicious postinstall scripts
- `save-exact=true` — pins exact versions, no silent upgrades
- `minimum-release-age=10080` — rejects packages published less than 7 days ago
- `block-exotic-subdeps=true` — blocks exotic sub-dependencies
- `trust-policy=no-downgrade` — prevents trust downgrades

Docker adds an additional isolation layer: dev tooling runs inside a container, keeping the host machine clean.

## Project Structure

```
src/
├── components/     # UI components (each has ComponentName.js + ComponentNameStyles.js)
├── pages/          # Next.js pages (index.js is the single page)
├── styles/         # Global styles and theme primitives
├── constants/      # Portfolio content — edit this to update projects, certs, timeline
├── contexts/       # React context (ThemeContext)
├── themes/         # Dark and light theme tokens
└── layout/         # Layout wrapper
```

## Features

- Responsive design, mobile-first
- Dark/light mode with localStorage persistence
- Smooth animations with Framer Motion
- SEO optimized static export
- Fast dev builds with Turbopack
- Supply-chain protected dependencies

---

Built with Next.js and React
