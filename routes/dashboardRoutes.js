const express = require("express");
const { getSummary, getCategoryWise } = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/summary", protect, authorizeRoles("admin", "analyst"), getSummary);
router.get("/category", protect, authorizeRoles("admin", "analyst"), getCategoryWise);

module.exports = router;