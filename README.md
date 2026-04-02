# 💰 Finance Dashboard Backend

## 📌 Overview
This project is a backend system for managing financial records with role-based access control. It allows users to create, manage, and analyze financial transactions.

---

## 🚀 Features
- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin, Analyst, Viewer)
- CRUD Operations for Transactions
- Dashboard APIs for financial insights
- Secure password hashing using bcrypt

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📂 Project Structure
config/
models/
controllers/
routes/
middleware/

---

## 🔐 Roles & Permissions

| Role | Access |
|------|--------|
| Viewer | View dashboard only |
| Analyst | View transactions + dashboard |
| Admin | Full access (CRUD + users) |

---

## 🔌 API Endpoints

### 👤 User APIs
- POST /api/users/register
- POST /api/users/login
- GET /api/users/all (Admin only)

### 💰 Transaction APIs
- POST /api/transactions (Admin)
- GET /api/transactions (Admin, Analyst)
- PUT /api/transactions/:id (Admin)
- DELETE /api/transactions/:id (Admin)

### 📊 Dashboard APIs
- GET /api/dashboard/summary
- GET /api/dashboard/category

---

## ⚙️ Setup Instructions

1. Clone repository
2. Install dependencies:
   npm install
3. Create `.env` file:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
4. Run server:
   npm run dev

---

## 📊 Sample Response

```json
{
  "totalIncome": 5000,
  "totalExpense": 2000,
  "netBalance": 3000
}