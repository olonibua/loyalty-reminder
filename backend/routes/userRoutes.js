const express = require("express");
const router = express.Router();

// Mock user data
const users = {
  1: { plan: "Entrepreneur" },
  2: { plan: "Standard" },
  3: { plan: "Pro" },
};

router.get("/api/user/:id/plan", (req, res) => {
  const userId = req.params.id;
  const user = users[userId];
  if (user) {
    res.json({ plan: user.plan });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
