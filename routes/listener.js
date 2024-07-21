const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const data = req.body;
  const filePath = "./data.json";

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ error: "Failed to write to file" });
    }
    console.log("Successfully wrote to file");
    return res.status(200).json({ message: "Data saved", data: data });
  });
});

module.exports = router;
