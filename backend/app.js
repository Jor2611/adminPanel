const express = require("express");
const path = require("path");
const fs = require("fs");
const { pool } = require("./config/db");
const { adminRouter, pmRouter, devRouter, auth } = require("./routers");
const app = express();
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.use("/admin", adminRouter);
app.use("/pm", pmRouter);
app.use("/dev", devRouter);
app.get("/createTables", async (req, res) => {
  const userTemplatePath = path.join(__dirname, "config", "db", "Users.sql");
  const reportTemplatePath = path.join(__dirname, "config", "db", "Report.sql");
  const tokenTemplatePath = path.join(__dirname, "config", "db", "Tokens.sql");
  const reports = fs.readFileSync(reportTemplatePath).toString();
  const users = fs.readFileSync(userTemplatePath).toString();
  const tokens = fs.readFileSync(tokenTemplatePath).toString();
  try {
    await pool.query(users);
    await pool.query(tokens);
    const doc = await pool.query(reports);
    return doc
      ? res.status(201).json({ success: true })
      : res.status(400).json({ success: false });
  } catch (e) {
    console.log(e);
    res.status(404).send("Not Found");
  }
});

module.exports = app;
//766648
//worourke22
