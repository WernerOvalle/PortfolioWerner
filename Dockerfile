# Dev-only — NOT used by Netlify
# Netlify reads netlify.toml and runs pnpm run build in its own environment
FROM node:22-alpine

# corepack ships with Node 22 — use it to install pnpm without npm scripts
RUN corepack enable && corepack prepare pnpm@latest --activate && \
    pnpm config set store-dir /root/.local/share/pnpm/store --global

WORKDIR /app

# Copy only package manifests first for better layer caching.
# If these files don't change, Docker reuses the cached install layer.
COPY package.json pnpm-lock.yaml .npmrc pnpm-workspace.yaml ./

# Install dependencies.
# --frozen-lockfile ensures the container uses exactly what is in the lockfile.
# esbuild's postinstall is allowed via pnpm.onlyBuiltDependencies in package.json.
RUN pnpm install --frozen-lockfile

# Source code is NOT copied here — it is mounted as a live volume at runtime.
# Edits on the host are reflected instantly inside the container.

EXPOSE 3000

# Required for hot reload to work on Windows (Docker Desktop / WSL2)
ENV WATCHPACK_POLLING=true
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["pnpm", "dev"]
