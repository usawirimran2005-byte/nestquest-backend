const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const protectUser = require("../middleware/userAuthMiddleware");
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getAllUsers,
  approveUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protectUser, getProfile);
router.put("/profile", protectUser, updateProfile);

router.get("/admin/all", protect, getAllUsers);
router.put("/admin/approve/:id", protect, approveUser);
router.delete("/admin/:id", protect, deleteUser);

module.exports = router;