# 🚀 Collaborative Coding Platform

A full-stack **MERN-based collaborative coding platform** where developers can write, run, and collaborate on code in a shared environment.

## 🎯 Project Goal

The main goal of this project is to build a **real-time collaborative coding platform** that allows multiple developers to work together on code from the same online workspace.

The platform is being developed with a focus on:

* 🔐 Secure authentication and authorization
* 👥 User accounts and profiles
* 💻 Online code editor
* 🤝 Collaborative coding
* ⚡ Real-time communication and updates
* 📁 Code/project management
* 🔗 Social authentication
* 📊 User dashboard
* 🛡️ Secure backend APIs

The project is also being developed as a practical way to understand and implement **MERN stack development, authentication, JWT, Passport.js, cookies, REST APIs, and real-time collaboration** in a single application.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Tailwind CSS
* JavaScript
* Fetch API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Passport.js
* bcrypt
* cookie-parser

## Authentication

The project uses a combination of:

* JWT-based authentication
* HTTP cookies
* Passport.js for social authentication
* Passport Local Strategy for traditional authentication

## Development Tools

* Git
* GitHub
* Visual Studio Code
* npm

---

# 📌 Current Project Structure

```text
Collaborative-Coding-Platform/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── ...
│   └── package.jsonf
│
├── server/                  # Node + Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── strategies/
│   ├── config/
│   └── ...
│
├── .env
├── .gitignore
└── README.md
```

> The exact folder structure may evolve as new features are added.

---
# ✅ Features Implemented So Far

### 🏠 Landing Page

* Built the initial landing page using **React** and **Tailwind CSS**.
* Added the basic structure and UI for the platform.

### 🔐 User Authentication

* Implemented the basic **signup and login** functionality.
* Added backend authentication APIs using **Node.js and Express**.
* Integrated **MongoDB/Mongoose** for storing user data.

### 🍪 JWT & Cookie Authentication

* Implemented **JWT-based authentication**.
* JWT is stored in an **HTTP cookie** after successful authentication.
* Configured frontend requests to send authentication cookies to the backend.

### 🛡️ Protected Routes

* Created JWT authentication middleware.
* Protected backend routes from unauthorized access.
* Invalid or missing tokens return an **Unauthorized (401)** response.

### 🔑 Password Security

* Integrated **bcrypt** for password hashing.
* User passwords are stored as secure hashes instead of plain text.
* Passwords are verified securely during login.

### 🧩 Passport.js

* Started integrating **Passport.js** for authentication strategies.
* Explored the **Passport Local Strategy** for username/password authentication.
* Passport is being used as the foundation for social authentication.

### 🐙 GitHub OAuth

* Started implementing **GitHub OAuth authentication** using Passport.
* Configured the required GitHub OAuth credentials.
* Explored the GitHub profile response and user information returned by GitHub.

### 🔄 Frontend–Backend Integration

* Connected the **React frontend** with the **Express backend**.
* Implemented API requests using the Fetch API.
* Configured credential handling for cookie-based authentication.
