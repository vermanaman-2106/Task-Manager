# Task Manager Application

This is a full-stack Task Manager application built for the Backend Internship Assignment.

The project includes a **Node.js + Express + MongoDB backend** and a **React frontend**.  
Users can register, login, and manage their tasks.

# Features

- User Registration
- User Login with JWT Authentication
- Create Task
- View Tasks
- Update Task
- Mark Task as Done
- Delete Task
- Logout functionality

# Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

Frontend:
- React
- Axios
- React Router

# Project Structure
Internship_assignment

backend/
controllers/
middleware/
models/
routes/
server.js

frontend/
src/
pages/
Register.jsx
Login.jsx
Dashboard.jsx

# Backend Setup

Go to backend folder
cd backend

Install dependencies

npm install

Create `.env` file

PORT=8000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

Run backend

npm run dev

Backend runs on

https://task-manager-wnyo.onrender.com/

# Frontend Setup

Go to frontend folder

cd frontend

Install dependencies

npm install

Run frontend

npm run dev

Frontend runs on

https://task-manager-delta-sage-59.vercel.app?_vercel_share=TaVVe24Hr5bXkKd8VrdHTRWlT65WakkH

# API Endpoints

### Auth

Register

POST https://task-manager-wnyo.onrender.com/api/v1/auth/register

Login

POST https://task-manager-wnyo.onrender.com/api/v1/auth/login

### Tasks

Create Task

POST https://task-manager-wnyo.onrender.com/api/v1/tasks

Get Tasks

GET https://task-manager-wnyo.onrender.com/api/v1/tasks

Update Task

PUT https://task-manager-wnyo.onrender.com/api/v1/tasks/{id}

Delete Task

DELETE https://task-manager-wnyo.onrender.com/api/v1/tasks/{id}

# API Documentation

Swagger documentation available at:

https://task-manager-wnyo.onrender.com/api-docs


<!-- Scalability Note -->

To support a larger number of users in the future, the system can be improved in the following ways:

Load Balancing: Deploy multiple backend servers behind a load balancer to distribute traffic.

Database Optimization: Add indexes on frequently queried fields such as userId to improve query performance.

Caching: Use tools like Redis to cache frequently accessed data and reduce database load.

Microservices: Separate services like authentication and task management so they can scale independently.

These improvements would help the application handle higher traffic and larger datasets efficiently.
