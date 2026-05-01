# Taskmate
# 🗓️ TaskMate – Scheduling & Reminder Web App

A full-stack task scheduling application that allows users to create, manage, and track tasks with automated email reminders.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication
* Secure password hashing (bcrypt)

### 📋 Task Management

* Create tasks
* View all tasks
* Update task status (pending → completed)
* Delete tasks
* User-specific task isolation

### ⏰ Reminder System

* Schedule reminders for tasks
* Background cron job checks reminders
* Automated email notifications

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Nodemailer (Email Service)
* node-cron (Background jobs)

### Frontend

* React (Vite)
* Axios
* React Router

---

## 📁 Project Structure

```
project-root/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   └── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd project-root
```

---

### 2️⃣ Backend Setup

```
cd Backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/scheduler
JWT_SECRET=your_secret_key
EMAIL=your_email@gmail.com
PASSWORD=your_app_password
```

Run backend:

```
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### 👤 Users

* `POST /api/users/register`
* `POST /api/users/login`

### 📋 Tasks (Protected)

* `POST /api/tasks`
* `GET /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

### ⏰ Reminders

* `POST /api/reminders`

---

## 🔐 Authentication

All protected routes require:

```
Authorization: Bearer <token>
```

---

## 📧 Email Reminder Flow

1. User creates task
2. Reminder is stored in DB
3. Cron job runs every minute
4. If reminder time is reached → email is sent
5. Reminder marked as `isSent = true`

---

## 🧪 Testing

Use Postman to test APIs:

1. Register user
2. Login → get token
3. Use token in headers
4. Perform CRUD operations

---

## ⚠️ Known Improvements

* Input validation (Joi / Zod)
* Better UI (Tailwind)
* Pagination for tasks
* Refresh tokens for auth
* Notification dashboard

---

## 🎯 Future Enhancements

* Push notifications
* Calendar integration
* Task categories & priorities
* Mobile app version

---

## 👨‍💻 Author

Sayan Guha

---

## ⭐ Final Note

This project demonstrates a complete MERN stack application with:

* Authentication
* CRUD operations
* Background jobs
* Email integration

---

⭐ Star the repo if you like it!
