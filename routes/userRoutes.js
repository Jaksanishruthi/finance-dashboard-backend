const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get("/all", protect, authorizeRoles("admin"), async (req, res) => {
  const users = await require("../models/User").find();
  res.json(users);
});