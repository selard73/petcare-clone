# AGENTS.md

## Cursor Cloud specific instructions

### Overview
This is a single-service Node.js app: a static pet-services directory site (`public/`) served by a
plain `http` server in `server.js` with a small JSON/SQLite-backed API under `/api/*`. There is no
build step, no bundler, and no test/lint framework configured.

### Running
- Start the dev server: `PORT=5600 node server.js` (or `npm start`, which defaults to port 5600).
- App is served at `http://localhost:5600`. Health check: `GET /api/health` → `{"ok":true}`.
- Requires Node 18+ with the built-in `node:sqlite` module (Node 22 is used here). If `node:sqlite`
  is unavailable, the server automatically falls back to a JSON store at `data/airtable.json`.

### Persistence
- Data is stored in `data/petcare.db` (SQLite) which is committed to the repo. There are no
  migrations to run; the schema is created on startup by `initSqlite()`.
- A default admin account is created on startup: `admin@pawsitively.com` / `admin123`
  (overridable via `ADMIN_EMAIL` / `ADMIN_PASSWORD` env vars).

### Notes / gotchas
- Email notifications (review/click reports) are optional and disabled unless `RESEND_API_KEY` or
  SMTP env vars are set; startup logs a harmless "Daily click report failed: Email is not
  configured" message when unset — this is expected in dev.
- There is no automated test or lint command; verify changes by running the server and exercising
  the site / `/api/*` endpoints.
- `scripts/` and `seo/` contain one-off SEO/content generation helpers, not part of the runtime
  request path.
