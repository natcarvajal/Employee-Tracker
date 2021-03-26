var mysql = require("mysql");
var inquirer = require("inquirer");
const dotenv = require("dotenv").config();
const cTable = require("console.table");
let roles = [];

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
        "Add Employee",
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
      name: "addD",
      type: "input",
      message: "New department?",
    })
    .then(function (answer) {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        answer.addD,
        function (err, res) {
          if (err) throw err;
          console.log(res);
          runSearch();
        }
      );
    });
}

function addR() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the new role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the new role?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department ID of the new role?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answer.title, answer.salary, answer.department_id],
        function (err, res) {
          if (err) throw err;
          console.log(res);
          runSearch();
        }
      );
    });
}

function addE() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "First name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "Last name?",
      },
      {
        name: "role_id",
        type: "input",
        message: "Role ID?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "Manager ID?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answer.first_name,
          answer.last_name,
          answer.role_id,
          answer.manager_id,
        ],
        function (err, res) {
          if (err) throw err;
          console.log(res);
          runSearch();
        }
      );
    });
}

function updateER() {
  let employees = [];
  connection.query("SELECT * FROM employee ", function (err, res) {
    if (err) throw err;
    console.log(res);
    for (i = 0; i < res.length; i++) {
      employees.push(res[i].first_name);
    }
    console.log(employees);
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message: "Please Select an option:",
          choices: employees,
        },
      ])
      .then(function (employee) {
        connection.query("SELECT * FROM role", function (err, res) {
          if (err) throw err;
          console.table(res);
          for (i = 0; i < res.length; i++) {
            roles.push(res[i].title);
          }
          inquirer
            .prompt([
              {
                name: "role",
                type: "list",
                message: "Please Select an role:",
                choices: roles,
              },
            ])
            .then(function (answer) {
              let index = roles.indexOf(answer.role) + 1;
              console.log(index);
              connection.query(
                `UPDATE employee SET role_id = ${index} WHERE first_name = "${employee.employee}"`,
                function (err, res) {
                  runSearch();
                }
              );
            });
        });
      });
  });
}
