# Hotel PMS — Technical Notes

## Current state

This folder contains an **incomplete backend skeleton** for a hotel property-management system. It is not a finished application.

Verified on 2026-11-09:

- Node.js dependencies install with `npm ci`.
- JavaScript syntax checks pass.
- The Express server can be started, but the database-backed flows cannot be completed because there is no local MySQL server and the schema/auth design is incomplete.

## Folder structure

```text
project_hotel_pms/
  backend/
    src/          Express routes, controllers, models, config
    package.json
    .env.example
  database/       Database notes
  docs/           This document
```

## Stack

- Node.js and Express
- MySQL (not available locally during verification)
- JavaScript

## Run

```powershell
cd backend
npm ci
Copy-Item .env.example .env
# edit .env with a reachable MySQL connection
npm start
```

The server reads its configuration from `backend/.env`.

## What is missing

- A complete database schema and migrations.
- A frontend.
- A verified authentication and password-reset flow.
- Seed data and documented demo credentials.
- Automated tests.
- Booking, room, guest, billing, and housekeeping workflows.

## Known limitations

- The project is a skeleton, not a usable PMS.
- MySQL is required; no local MySQL/MariaDB instance was available during verification.
- The default secrets and connection values in `.env.example` are placeholders only.
- Do not deploy this project as-is.

## Publishing notes

- `.env`, `node_modules/`, and database files are ignored by Git.
- Treat this repository as a starting point or coursework skeleton.
