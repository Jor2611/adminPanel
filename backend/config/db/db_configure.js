const fs = require("fs");
const path = require("path");
const { pool } = require("./");
const chalk = require("chalk");

const tablesGenerator = async () => {
  const userTemplatePath = path.join(__dirname, "Users.sql");
  const reportTemplatePath = path.join(__dirname, "Report.sql");
  const tokenTemplatePath = path.join(__dirname, "Tokens.sql");
  const reports = fs.readFileSync(reportTemplatePath).toString();
  const users = fs.readFileSync(userTemplatePath).toString();
  const tokens = fs.readFileSync(tokenTemplatePath).toString();
  try {
    await pool.query(users);
    await pool.query(tokens);
    const doc = await pool.query(reports);
    console.log(chalk.inverse.green("Created Tables For Database"));
    return doc;
  } catch (e) {
    console.log(chalk.inverse.red(e));
  }
};

tablesGenerator();
