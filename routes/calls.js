const express = require('express')
const router = express.Router()

// Get all Calls
router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: "Show all Calls" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, message: `Show Call ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: `Create a New Call` });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, message: `Edit a Call ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, message: `delete a Call ${req.params.id}` });
});

module.exports = router