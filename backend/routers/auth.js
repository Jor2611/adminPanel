const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");
const { getProfile } = require("../config/middlewares");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query(
      "SELECT id,username,role FROM USERS WHERE username=$1 and password=crypt($2,password)",
      [username, password]
    );
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }
    let { id, role } = user.rows[0];
    const token = await jwt.sign(
      {
        id: id.toString(),
        usename: username.toString(),
        role: role.toString()
      },
      process.env.JWT_SECRET
    );
    const doc = await pool.query(
      "INSERT INTO tokens (token,owner_id) VALUES ($1,$2)",
      [token, id]
    );
    return res.status(201).json({ user: user.rows[0], token });
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.get("/getUser", getProfile, async (req, res) => {
  console.log(req.user);
  res.json({ user: req.user });
});

router.get("/logout", async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    await pool.query("DELETE FROM tokens WHERE token=$1", [token]);
    return res.status(200).end();
  } catch (e) {
    return res.status(500).send();
  }
});

module.exports = router;
