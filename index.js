const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const util = require("util");
const mysql = require("mysql");

require("console.table");

//object, method
const connection = mysql.createConnection({
  host: "localhost",
  // Your port, if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Be sure to update with your own MySQL password!
  password: "password",
  database: "employees_db",
});

//connection.query = util.promisify(connection.query);

// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`connected as id ${connection.threadId}`);
//   start();
//   //afterConnection();
//   // ENDS SQL SERVER CONNECTION
//   //   connection.end();
// });

// questions for inquirer
const menuQuestions = [
  "View all employees",
  "View all employees by department",
  "View all employees by manager",
  "Add employee",
  "Update employee role",
  "Update employee manager",
];

// function to show options menu
const start = () => {
  inquirer
    .prompt({
      name: "mainChoice",
      type: "list",
      message: "What would you like to do?",
      choices: menuQuestions,
    })
    .then((answer) => {
      switch (answer.mainChoice) {
        case "View all employees":
          showAllEmps();
          break;
        case "View all employees by department":
          empByDep();
          break;
        case "View all employees by manager":
          empByManager();
          break;
        case "Add employee":
          addEmps();
          break;
        case "Update employee role":
          updateEmp();
          break;
        case "Update employee manager":
          updateManager();

        default:
          break;
      }
    });
};
// function to show all employees
const showAllEmps = () => {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table("All employees", res);
  });
};

const empByDep = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
  });
};

const empByManager = () => {
  connection.query((err, res) => {});
};

const addEmpQuestions = [
  {
    name: "first_name",
    type: "input",
    message: "What is the employee's first name",
  },
  {
    name: "last_name",
    type: "input",
    message: "What is the employee's last name",
  },
  {
    name: "role_id",
    type: "input",
    message: "What is the employee'srole id",
  },
  {
    name: "manager_id",
    type: "input",
    message: "What is the employee's managerid",
  },
];

const addEmps = () => {
  //   connection.query((err, res) => {
  //     if (err) throw err;
  inquirer.prompt(addEmpQuestions).then((answer) => {
    connection.query("INSERT INTO employees SET ?", {
      first_name: answer.first_name,
      last_name: answer.last_name,
      role_id: answer.role_id,
      manager_id: answer.manager_id,
    });
    start();
  });
  //});
};

const updateEmp = () => {
  connection.query((err, res) => {});
};

const updateManager = () => {
  connection.query((err, res) => {});
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
  //afterConnection();
  // ENDS SQL SERVER CONNECTION
  //   connection.end();
});

// console.table method and mySQL is installed and available

// data should be stored in mySQL

//make sure all data is persistent in database

// add employees

// add departments and roles to employees

// view departments and roles to employees

// delete departments roles and employees

// view total used budget of a department

// view combined salaries of all employees in that department
