const { Pool, Client } = require("pg");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
// pool.query("SELECT * FROM users LIMIT 10", (err, res) => {
//   console.log(res.rows);
//   pool.end();
// });

module.exports = { pool, Client };
// // const client = new Client({
// //   user: 'dbuser',
// //   host: 'database.server.com',
// //   database: 'mydb',
// //   password: 'secretpassword',
// //   port: 3211,
// // })
// // client.connect()
// // client.query('SELECT NOW()', (err, res) => {
// //   console.log(err, res)
// //   client.end()
// // })
