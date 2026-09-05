# 🚀 Collaborative Coding Platform

A full-stack **MERN-based collaborative coding platform** where developers can write, run, and collaborate on code in a shared environment.

## 🎯 Project Goal

The goal is to build a **real-time collaborative coding platform** where multiple developers can work together in the same online workspace.

The platform will include:

- 🔐 Authentication & authorization
- 👤 User profiles
- 📊 Dashboard
- 💻 Online code editor
- 🤝 Real-time collaboration
- 💬 Real-time communication
- 📁 Project management
- 🔗 Social authentication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT
- HTTP Cookies
- bcrypt
- Passport.js

### Tools
- Git
- GitHub
- VS Code
- npm

---

## 📌 Project Structure

```text
Collaborative-Coding-Platform/
│
├── client/
│   └── src/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── strategies/
│   └── config/
│
├── .env
├── .gitignore
└── README.md

✅ Features Implemented So Far
🏠 Landing Page
Built the initial landing page with React and Tailwind CSS.
Added the basic UI and navigation.
🔐 Authentication
Implemented signup/login authentication flow.
Added authentication APIs using Express and MongoDB.
Implemented JWT-based authentication.
🍪 JWT & Cookies
JWT is stored in an HTTP cookie.
Configured frontend requests to send authentication credentials.
🛡️ Protected Routes
Added JWT authentication middleware.
Protected backend routes using the authenticated user.
🔑 Password Security
Added bcrypt password hashing.
Implemented password verification.
Added password setup functionality.
👤 User Model
Created the User Mongoose schema.
Added account and profile-related fields.
📊 Dashboard & Profile APIs
Added GET /dashboard.
Added GET /profile.
Added PATCH /profile/edit.
Added PATCH /profile/password.
🔄 Frontend–Backend Integration
Connected the React frontend with the Express backend.
Added API communication using Fetch API.
Configured CORS and credentials for cookie-based authentication.
🧩 Passport.js

Passport.js is being integrated into the authentication architecture.

Planned authentication strategies include:

Local Strategy
GitHub OAuth
Google OAuth
🚧 Upcoming Features
👤 Complete profile functionality
🔗 Social authentication
💻 Online code editor
🏠 Coding rooms
🤝 Real-time collaboration
💬 Real-time chat
📁 Project management
🚀 Deployment
🌱 Development Roadmap
[✓] MERN Setup
[✓] Landing Page
[✓] Authentication
[✓] JWT & Cookies
[✓] JWT Middleware
[✓] Password Security
[✓] User Schema
[✓] Dashboard API
[✓] Profile API
[✓] Profile Edit API
[✓] Password Update API
[✓] Frontend–Backend Integration

[ ] Passport Authentication
[ ] Social Login
[ ] Online Code Editor
[ ] Coding Rooms
[ ] Real-time Collaboration
[ ] Real-time Chat
[ ] Project Management
[ ] Deployment
🚀 Current Status

Status: 🟡 In Development

The authentication system and initial user-related backend routes are implemented. The next stage is to continue with profile functionality and Passport authentication, followed by the core collaborative coding features.