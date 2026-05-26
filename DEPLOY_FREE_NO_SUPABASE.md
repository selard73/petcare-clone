# Free, No-Supabase Deployment Path

This project now uses SQLite by default for persistent shared data.

## Current persistence mode

- API writes go to `/api/airtable`
- Records are stored in `data/petcare.db` (SQLite)
- This is shared for all users hitting the same deployed backend URL

## What "site-wide permanent save" means here

When deployed as one shared backend service:

- admin/business edits are written to `petcare.db`
- every visitor reads from the same database
- updates are visible across devices and locations

## Local run

```powershell
$env:PORT=5600
node server.js
```

## Free hosting note

You can start on free hosting, but you must keep persistent disk/database storage enabled in that host.
If the host wipes disk between restarts, your data will not persist.
