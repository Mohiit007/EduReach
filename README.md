# EduReach

A modern education platform scaffold with a React (Vite) client and Node/Express server, designed for offline-friendly PWA features and role-based dashboards.

## Monorepo Structure

```
EduReach/
├── client/                     # React + Vite app (PWA-ready)
│   ├── index.html              # Vite entry HTML
│   ├── public/                 # Static assets (served as-is)
│   │   ├── manifest.json       # PWA manifest
│   │   ├── service-worker.js   # Service worker (basic cache-first)
│   │   └── icons/              # App icons
│   └── src/                    # Application source
│       ├── components/         # Common UI components
│       ├── pages/              # Routes/pages, includes dashboards
│       ├── redux/              # Store and slices
│       ├── pwa/                # SW registration, push, IndexedDB helpers
│       ├── services/           # API helpers
│       ├── assets/             # Static assets placeholder
│       └── utils/              # Utilities placeholder
├── server/                     # Express API server
│   ├── config/                 # DB and auth config
│   ├── controllers/            # Route handlers
│   ├── models/                 # Mongoose models
│   ├── routes/                 # Express routers
│   ├── middleware/             # Auth/role/error middleware
│   ├── utils/                  # Email, file upload, offline sync
│   └── server.js               # App entry (connects to Mongo, starts server)
├── docs/                       # Documentation
├── .env                        # Server env (PORT, MONGO_URI, JWT_SECRET, etc.)
├── package.json                # Monorepo workspaces (client, server)
└── README.md
```

## Prerequisites

- Node.js 18+
- A running MongoDB instance (local or cloud)

## Quick Start

1. Install dependencies for both workspaces (client and server):

   ```bash
   npm install
   ```

2. Create and/or edit environment variables in `.env` at the repo root (used by server):

   ```ini
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/edureach
   JWT_SECRET=change_me
   CLIENT_URL=http://localhost:3000
   NODE_ENV=development
   ```

3. Start the API server (Express + Mongo):

   ```bash
   npm run dev:server
   ```

   - Health check: http://localhost:5000/api/health

4. Start the client (Vite):

   ```bash
   npm run start:client
   ```

   - Dev server: http://localhost:3000

## Client Configuration

- API base URL can be configured via Vite env var `VITE_API_BASE`.
  - Example: create `client/.env` with:

    ```ini
    VITE_API_BASE=http://localhost:5000/api
    ```

- PWA components:
  - `client/public/manifest.json`
  - `client/public/service-worker.js`
  - `client/src/pwa/swRegistration.js` registers the service worker in production
  - `client/src/pwa/offlineDB.js` provides basic IndexedDB helpers

## Server Notes

- MongoDB connection is established on startup in `server/server.js` using `MONGO_URI` from `.env`.
- Routes are scaffolded under `server/routes/` and controllers under `server/controllers/`.
- Middleware includes a basic error handler and placeholders for auth/role checks.

## Scripts

- Root (monorepo):
  - `npm run start:server` – start API server
  - `npm run dev:server` – start API with nodemon
  - `npm run start:client` – start Vite dev server
  - `npm run build:client` – build client

- Client:
  - `npm run dev` – Vite dev
  - `npm run build` – Vite build
  - `npm run preview` – Vite preview

- Server:
  - `npm run dev` – nodemon
  - `npm run start` – node

## Next Steps

- Implement real authentication (JWT) and guard middleware.
- Flesh out controllers and models for lessons, quizzes, progress, and virtual lab.
- Add CI/CD, testing, and linting.

