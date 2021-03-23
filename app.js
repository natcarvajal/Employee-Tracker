var mysql = require("mysql");
var inquirer = require("inquirer");
const dotenv = require("dotenv").config();
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "employeedb",
      type: "list",
      message: "Please Select an option:",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Departments",
        "Add Roles",
        "Add Employees",
        "Update Employees Roles",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.employeedb) {
        case "View Departments":
          viewD();
          break;

        case "View Roles":
          viewR();
          break;

        case "View Employees":
          viewE();
          break;

        case "Add Departments":
          addD();
          break;

        case "Add Roles":
          addR();
          break;

        case "Add Employee":
          addE();
          break;

        case "Update Employees Roles":
          updateER();
          break;

        case "Exit":
          exit();
          break;
      }
    });
}

function viewD() {
  console.log("Viewing all departments..");
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}

function viewR() {
  console.log("Viewing all roles..");
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}
function viewE() {
  console.log("Viewing all employees..");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}

function addD() {
  inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "What song would you like to look for?",
    })
    .then(function (answer) {
      console.log(answer.song);
      connection.query(
        "SELECT * FROM top5000 WHERE ?",
        { song: answer.song },
        function (err, res) {
          console.log(
            "Position: " +
              res[0].position +
              " || Song: " +
              res[0].song +
              " || Artist: " +
              res[0].artist +
              " || Year: " +
              res[0].year
          );
          runSearch();
        }
      );
    });
}

function songAndAlbumSearch() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?",
    })
    .then(function (answer) {
      var query =
        "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
      query +=
        "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
      query +=
        "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

      connection.query(
        query,
        [answer.artist, answer.artist],
        function (err, res) {
          console.log(res.length + " matches found!");
          for (var i = 0; i < res.length; i++) {
            console.log(
              i +
                1 +
                ".) " +
                "Year: " +
                res[i].year +
                " Album Position: " +
                res[i].position +
                " || Artist: " +
                res[i].artist +
                " || Song: " +
                res[i].song +
                " || Album: " +
                res[i].album
            );
          }

          runSearch();
        }
      );
    });
}
