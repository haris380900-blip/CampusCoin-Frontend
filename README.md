# TechWiz MERN Starter

Production-oriented MERN foundation: React + Vite + Tailwind CSS on the frontend, Express + MongoDB Atlas on the backend.

## Run locally

1. Put your MongoDB Atlas application connection string in `backend/.env` as `MONGO_URI` and add a long random `JWT_SECRET`.
2. In one terminal, open `frontend` and run `npm run dev`.
3. In another terminal, open `backend` and run `npm run dev`.

The frontend runs at `http://localhost:5173`. Vite forwards all `/api/*` requests to `http://localhost:5000`. After Atlas is configured, verify the API at `http://localhost:5000/api/health`.

## Architecture

- Frontend route definitions live in `frontend/src/routes`; pages are in `pages`, reusable UI in `components`, and the shared Axios client in `lib/api.js`.
- Backend controllers should handle requests, services should own business logic, models should define Mongoose schemas, and routes should only compose endpoints.
- JWT verification is prepared to use an HTTP-only `token` cookie. Authentication endpoints can be added without changing the project foundation.

## Atlas safety

Create an Atlas database user and allow your current IP in Network Access. Use an application URI such as `mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/techwiz`; URL-encode special characters in the password. Never commit real secrets—`.env` is ignored and `.env.example` is safe to share.
