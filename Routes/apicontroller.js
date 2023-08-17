const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "smart_cage",
});

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
//   connection.connect();
  connection.query(`SELECT * FROM tasks`, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
