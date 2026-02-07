# SkyGeni Dashboard

SkyGeni is a full-stack analytics dashboard built with **React (frontend)** and **Node.js + Express  + TypeScript (backend)**.  
It visualizes revenue trends, sales drivers, risk factors, and recommendations using JSON-based data.

---

## 🧱 Tech Stack

### Frontend
- React
- CSS
- Chart.js / Recharts
- Axios

### Backend
- Node.js
- Express
- JSON-based mock data
- REST APIs
- Typescript

---

## 📂 Project Structure

SkyGeni/
├── backend/        # Express API server  
├── frontend/       # React dashboard UI  
├── package.json    # Root scripts (runs both apps)  
└── README.md  

---

## 🚀 Getting Started

### 1️⃣ Install root dependencies

npm install


### 2️⃣ Install backend dependencies
cd backend
npm install

### 3️⃣ Install frontend dependencies
cd ../frontend
npm install

### ▶️ Running the Project

Run frontend & backend together
(from the root SkyGeni folder)

npm run dev

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:3000 (opens automatically)


## Run individually

- Backend only
npm run backend

- Frontend only
npm run frontend
