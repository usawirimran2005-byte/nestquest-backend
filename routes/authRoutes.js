const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { loginAdmin, changePassword } = require("../controllers/authController");

router.post("/login", loginAdmin);
router.put("/change-password", protect, changePassword);

module.exports = router;