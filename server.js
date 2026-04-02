const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

const transactionRoutes = require("./routes/transactionRoutes");

app.use("/api/transactions", transactionRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);