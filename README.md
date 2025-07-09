# 🧠 Emotion Reflection Tool

A simple web app that lets users reflect on their feelings, analyzes them via a FastAPI backend, and returns a mock emotional response. Built with **Next.js (TypeScript)** and **FastAPI**, and designed with a clean, mobile-first UI.

---

## ✨ Features

- 💬 Text input form for emotional reflections
- ⚡ FastAPI backend that returns mock emotions like `"Anxious"` or `"Happy"`
- 💡 Shows emotion + confidence level in a stylized card
- 📱 Responsive & mobile-first design
- 🔁 Deployed on **Vercel** (frontend) & **Render** (backend)

---

## 🛠 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- TypeScript
- Tailwind CSS

### Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- Python 3.12
- CORS Middleware
- Deployed on [Render](https://render.com)

---

## 🚀 Live Demo

- **Frontend:** [https://emotionapp.vercel.app](https://emotionapp.vercel.app)  
- **Backend API:** [https://emotion-api-1aw6.onrender.com](https://emotion-api-1aw6.onrender.com)

---

### ✅ Prerequisites

- Node.js ≥ 18
- Python ≥ 3.9

### 🔹 Frontend (Next.js)

- this is frontend repositery 
- npm install
- make .env.local NEXT_PUBLIC_BACKEND_URL=https://emotion-api-1aw6.onrender.com
- npm run dev
- App runs at http://localhost:3000

### 🔹 Backned (Python)

- go to the backend repositery here - https://github.com/helloayan14/emotion-api
- python3 -m venv venv
- source venv/bin/activate
- pip install fastapi uvicorn
- uvicorn main:app --reload
- API runs at http://127.0.0.1:8000
- Swagger docs at http://127.0.0.1:8000/docs
- API runs at http://127.0.0.1:8000/analyze  for the endpoint that is in work of havin emotion
- for freezing requirement (usgae in production)  pip freeze > requirements.txt

### 🔹 API
- Request(POST)
- {
  "text": "I feel nervous about my job interview"
- }

- {
  "emotion": "Anxious",
  "confidence": 0.87
- }


