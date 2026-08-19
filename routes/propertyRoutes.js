const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post("/", protect, createProperty);
router.put("/:id", protect, updateProperty);
router.delete("/:id", protect, deleteProperty);

module.exports = router;