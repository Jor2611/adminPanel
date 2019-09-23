const express = require("express");
const router = express.Router();
const { pool } = require("../config/db");
const { adminPermissions } = require("../config/middlewares");

router.get("/getUsers", adminPermissions, async (req, res) => {
  let { offset, limit } = req.query;
  try {
    let usersObj = await pool.query(
      "SELECT * FROM users ORDER BY created_at DESC OFFSET $1 LIMIT $2",
      [offset, limit]
    );
    if (usersObj.rows.length === 0) throw new Error();
    let users = usersObj.rows.map(user => {
      delete user.created_at;
      delete user.updated_at;
      delete user.password;
      return user;
    });
    return res.status(200).json({ users });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/getUser/:id", adminPermissions, async (req, res) => {
  try {
    let userObj = await pool.query("SELECT * FROM users WHERE id=$1", [
      req.params.id
    ]);
    if (userObj.rows.length === 0) throw new Error();
    delete userObj.rows[0].updated_at;
    delete userObj.rows[0].password;
    return res.status(200).json({ user: userObj.rows[0] });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.post("/createUser", adminPermissions, async (req, res) => {
  const { username, password, first_name, last_name, gender, role } = req.body;
  try {
    let user = await pool.query(
      "INSERT INTO users (username, password, first_name, last_name, gender, role) VALUES ($1,crypt($2,gen_salt('bf')),$3,$4,$5,$6)",
      [username, password, first_name, last_name, gender, role]
    );
    return user
      ? res
          .status(201)
          .json({ success: true, msg: "Users created successfully" })
      : res.status(400).json({ success: false, msg: "Cannot create user." });
  } catch (e) {
    return e.code === "23505"
      ? res
          .status(400)
          .json({ success: false, msg: "Username already exists." })
      : res.status(500).end();
  }
});

router.patch("/updateUser/:id", adminPermissions, async (req, res) => {
  const updates = Object.keys(req.body);
  let { first_name, last_name, gender, role } = req.body;
  const allowedUpdates = [
    "first_name",
    "last_name",
    "gender",
    "role",
    "updated_at"
  ];
  const isValidOperation = updates.every(item => allowedUpdates.includes(item));
  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid Updates!" });
  try {
    let updatedUser = await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2, gender=$3, role=$4,updated_at=NOW() WHERE id=$5",
      [first_name, last_name, gender, role, req.params.id]
    );
    return updatedUser.rowCount === 1
      ? res.status(201).send({ success: true, msg: "User updated" })
      : res.status(400).json({ success: false, msg: "Cannot update Report" });
  } catch (e) {
    return (e.code = "23514" ? res.status(403).end() : res.status(400).end());
  }
});

router.delete("/deleteUser/:id", adminPermissions, async (req, res) => {
  const id = req.params.id;
  try {
    let doc = await pool.query("DELETE FROM users WHERE id=$1", [id]);
    return doc
      ? res.status(200).json({ success: true, msg: "User Deleted" })
      : res.status(404).json({ success: false, msg: "User not found" });
  } catch (e) {
    return res.status(500).end();
  }
});

router.get("/getReports", adminPermissions, async (req, res) => {
  let { offset, limit } = req.query;
  try {
    let reports = await pool.query(
      "SELECT * FROM reports ORDER BY created_at DESC OFFSET $1 LIMIT $2",
      [offset, limit]
    );
    return reports.rows.length > 0
      ? res.status(200).json({ reports: reports.rows })
      : res.status(404).end();
  } catch (e) {
    return res.status(500).end();
  }
});

router.post("/handleReport/:id", adminPermissions, async (req, res) => {
  res.send("handleReport");
});

module.exports = router;
