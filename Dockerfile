# Dev-only — NOT used by Netlify
# Netlify reads netlify.toml and runs pnpm run build in its own environment
FROM node:22-alpine

# pnpm's global bin dir must be in PATH before any `pnpm config --global` call,
# otherwise pnpm aborts with "The configured global bin directory is not in PATH"
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME/bin:$PNPM_HOME:$PATH

WORKDIR /app

# Copy only package manifests first for better layer caching.
# If these files don't change, Docker reuses the cached install layer.
# package.json must land before corepack runs — see below.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# corepack ships with Node 22 — use it to install pnpm without npm scripts.
# `corepack prepare --activate` with no version reads the "packageManager" field
# from package.json. That is the same mechanism Netlify uses, so local Docker and
# Netlify resolve to the exact same pnpm. Never pin the version here as well:
# packageManager is the single source of truth.
RUN corepack enable && corepack prepare --activate && \
    pnpm config set store-dir /root/.local/share/pnpm/store --global

# Install dependencies.
# --frozen-lockfile ensures the container uses exactly what is in the lockfile.
# Install scripts stay blocked — see ignoreScripts/allowBuilds in pnpm-workspace.yaml.
RUN pnpm install --frozen-lockfile

# Source code is NOT copied here — it is mounted as a live volume at runtime.
# Edits on the host are reflected instantly inside the container.

EXPOSE 3000

# Required for hot reload to work on Windows (Docker Desktop / WSL2)
ENV WATCHPACK_POLLING=true
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["pnpm", "dev"]
