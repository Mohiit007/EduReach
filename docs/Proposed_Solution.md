# Proposed Solution

High-level architecture and approach for EduReach.

- Frontend: React app structured under `client/` with PWA features (service worker, manifest, IndexedDB helpers)
- Backend: Node/Express under `server/`, modular routes/controllers/models, MongoDB via Mongoose
- Auth: JWT-based (placeholder in this scaffold)
- Offline-first: cache assets with service worker, store lessons offline, sync on reconnect
- Deployment: monorepo with `workspaces` in root `package.json`
