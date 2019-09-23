const admin = require("./admin");
const pm = require("./pm");
const dev = require("./dev");
const auth = require("./auth");

module.exports = {
  adminRouter: admin,
  pmRouter: pm,
  devRouter: dev,
  auth
};
