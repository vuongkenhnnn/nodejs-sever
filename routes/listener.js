const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const data = req.body;
  return res.status(200).json({ data: data });
});

module.exports = router;