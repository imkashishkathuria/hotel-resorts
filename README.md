# hotel-resorts
# Full Stack Web App – Client (React) + Server (Flask)

This repository contains a full stack web application with a React frontend and Flask backend.

---

## 📁 Folder Structure

root/
├── client/ # React frontend
├── server/ # Flask backend
│ ├── app.py
│ ├── requirements.txt
└── README.md # This file

⚙️ Backend Setup (Flask)
bash
Copy
Edit
cd server

# Create a virtual environment
python -m venv .venv

# Activate the environment
# For Windows:
.venv\Scripts\activate
# For macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask app
python app.py


Once running, the backend will start on http://127.0.0.1:5000/ or the port defined in app.py.

💻 Frontend Setup (React)
bash
Copy
Edit
cd client

# Install dependencies
npm install

# Run the development server
npm start


The frontend will start on http://localhost:3000/
