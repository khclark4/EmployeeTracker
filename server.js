const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  // Your password
  password: "Root",
  database: "employee_tracker",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
  prompt();
});

function prompt() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add a new employee",
        "Update employee role",
        "Exit",
      ],
    })
    .then(function (res) {

        switch (answer.startQuestions) {
            case "View All Employees":
                showAllEmployees();
                break;

            case "View All Roles":
                showAllRoles();
                break;

            case "View All Departments":
                showAllDepartments();
                break;

            case "Add a department":
                addDepartment();
                break;

             case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmployee();
                break;

            case "Exit":
                connection.end();
                break;
        }
    });
}
