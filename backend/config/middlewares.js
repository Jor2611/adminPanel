const jwt = require("jsonwebtoken");
const { pool } = require("../config/db");

const adminPermissions = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let user = await getCredentials(token, "admin");
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: e });
  }
};

const pmPermissions = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let user = await getCredentials(token, "pm");
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: e });
  }
};

const devPermissions = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let user = await getCredentials(token, "dev");
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: e });
  }
};

const getCredentials = async (token, role) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await pool.query(
    "SELECT * FROM users JOIN tokens ON users.id=tokens.owner_id WHERE  users.id=$1 AND tokens.token=$2 LIMIT 1",
    [decoded.id, token]
  );
  if (!user || user.rows[0].role !== role) throw new Error();
  return user.rows[0];
};

module.exports = {
  adminPermissions,
  pmPermissions,
  devPermissions
};
