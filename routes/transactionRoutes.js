const express = require("express");
const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), createTransaction);
router.get("/", protect, authorizeRoles("admin", "analyst"), getTransactions);
router.put("/:id", protect, authorizeRoles("admin"), updateTransaction);
router.delete("/:id", protect, authorizeRoles("admin"), deleteTransaction);

module.exports = router;