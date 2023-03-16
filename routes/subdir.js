const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/test", (req, res) => {
  res.sendFile("../views/test.html", { root: __dirname });
});
module.exports = router;
