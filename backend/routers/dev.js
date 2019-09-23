const express = require("express");
const router = express.Router();
const { devPermissions } = require("../config/middlewares");
const { pool } = require("../config/db");

router.get("/", devPermissions, async (req, res) => {
  try {
    let reports = await pool.query("SELECT * FROM reports WHERE owner_id=$1", [
      req.user.owner_id
    ]);
    return reports.rows.length > 0
      ? res.status(200).json({ reports: reports.rows })
      : res.status(404).end();
  } catch (e) {
    return res.status(500).end();
  }
});


router.post("/createReport", devPermissions, async (req, res) => {
  let { name, description, estimation, spent } = req.body;
  try {
    let report = await pool.query(
      "INSERT INTO reports(name,description,estimation,spent,owner_id) VALUES($1,$2,$3,$4,$5)",
      [name, description, estimation, spent, req.user.owner_id]
    );
    return report.rowCount === 1
      ? res.status(201).send({ report })
      : res.status(400).json({ success: false, msg: "Cannot create Report" });
  } catch (e) {
    return (e.code = "23514" ? res.status(403).end() : res.status(400).end());
  }
});

router.patch("/updateReport/:id", devPermissions, async (req, res) => {
  const updates = Object.keys(req.body);
  let { name, description, estimation, spent } = req.body;
  const allowedUpdates = [
    "name",
    "description",
    "estimation",
    "spent",
    "updated_at"
  ];
  const isValidOperation = updates.every(item => allowedUpdates.includes(item));
  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid Updates!" });
  try {
    let updatedReport = await pool.query(
      "UPDATE reports SET name=$1, description=$2, estimation=$3, spent=$4,updated_at=NOW() WHERE id=$5 and owner_id=$6",
      [name, description, estimation, spent, req.params.id, req.user.owner_id]
    );
    console.log(updatedReport);
    return updatedReport.rowCount === 1
      ? res.status(201).json({ success: true, msg: "Report updated!" })
      : res.status(400).json({ success: false, msg: "Cannot update Report" });
  } catch (e) {
    return (e.code = "23514" ? res.status(403).send() : res.status(400).end());
  }
});

module.exports = router;
