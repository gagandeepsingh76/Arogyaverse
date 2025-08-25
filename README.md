# AROGYAVERSE

## Tech Stack

- Vite + React + TypeScript + Tailwind + shadcn-ui
- Express backend (Node.js) with security hardening

## Development

- Frontend only: `npm run dev` (Vite on 8080)
- Backend only: `npm run dev:api` (Express on 4000)
- Both concurrently: `npm run dev:full`

Vite proxies `/api` to `http://localhost:4000` in development.

## Build and Run

1) Build frontend: `npm run build`
2) Start backend: `npm start`

Backend will serve the built frontend from `dist/` when present.

## Environment

Create a `.env` at project root:

```
PORT=4000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:8080
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
MAIL_TO=contact@arogyaaverse.com
```

If SMTP is not configured, messages are stored in memory and logged.

## Deployment

- Single server: build frontend, run `npm start` to serve both API and static files.
- Docker: see `Dockerfile`.
