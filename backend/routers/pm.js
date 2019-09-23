const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("PM page");
});

router.post("/changeAvatar", async (req, res) => {
  res.send("Create Report");
});

router.get("/getReports", async (req, res) => {
  res.send("Get Reports");
});

router.patch("/handleReport/:id", async (req, res) => {
  res.send("Create Report");
});

router.get("/getNotifications", async (req, res) => {
  res.send("getNotifications");
});

module.exports = router;
