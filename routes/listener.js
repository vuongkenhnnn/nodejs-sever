const express = require("express");
const router = express.Router();

router.post("/alert-hook", async (req, res, next) => {
  return res.status(200).json({
    data: req
  });
});

module.exports = router;