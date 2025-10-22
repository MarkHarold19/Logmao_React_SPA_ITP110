ITP110 React Vite Fullstack (merged)

Frontend (client):
  - This folder is a Vite + React project.
  - Run: `npm install` then `npm run dev` to start the frontend (http://localhost:5173)

Backend (server):
  - Folder: server/
  - Run: `cd server && npm install && npm start` to start backend (http://localhost:5000)

Run both together:
  - From project root run:
    1) `npm install` (to install devDependency concurrently)
    2) `npm run fullstack`
  - This uses concurrently to run both frontend dev server and backend.

Notes:
  - Vite is configured to proxy /api to http://localhost:5000.
  - server/db.json is intentionally empty ({}).
