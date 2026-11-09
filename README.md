# project_hotel_pms

## Hotel PMS — Backend Skeleton

An Express/MySQL backend skeleton for a hotel property-management system. It is **not** a complete application: there is no frontend, no database schema, and no real password verification.

- Original location: `D:\projects\VS code\website of narayensthan resort\hotel-pms`
- Working copy: `D:\PROJECTS_READY\project_hotel_pms`
- Stack: Node.js, Express 4, MySQL (`mysql2`), JWT

## Folder layout

```text
project_hotel_pms/
  backend/    Express server, routes, middleware
  database/   Database notes (schema not implemented)
  docs/       Project documentation
```

## Current status

- [x] Backend dependencies installed with `npm ci`
- [x] All JavaScript files passed syntax checks
- [ ] No frontend
- [ ] No database schema or migrations
- [ ] Password verification is not implemented
- [ ] Runtime not verified because no local MySQL server is available

**Status: incomplete / service-dependent.** Treat this as a starting point, not a working PMS.

## Setup (after adding a schema and MySQL)

```powershell
cd backend
npm ci
Copy-Item .env.example .env
# set PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET
npm start
```

Expected environment:

```dotenv
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=hotel_pms
JWT_SECRET=replace-with-a-long-random-secret
```

## What is missing

- Database schema/migrations for rooms, guests, bookings, invoices, and staff
- Real authentication and password hashing
- Frontend or API documentation for clients
- Automated tests
- Seed data

## Notes and limitations

- The original `.env` contains a placeholder JWT secret; rotate it.
- Do not deploy this skeleton as-is.
- If you continue the project, add a schema, migrations, password hashing (bcrypt/argon2), and integration tests.

## Troubleshooting

- **`ECONNREFUSED 3306`**: start MySQL and verify `DB_*` settings.
- **Login is not secure**: expected; the skeleton does not verify passwords properly.
- **No UI**: this copy is backend-only.
