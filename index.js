const inquirer = require("inquirer");
const choices = require("inquirer/lib/objects/choices");
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

// questions for inquirer
const menuQuestions = [
  "View all employees",
  "View all employees by department",
  "View all employees by manager",
  "Add employee",
  "Update employee role",
  "Update employee title",
  "Update employee manager",
  //   "Remove an employee",
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
        case "Update employee title":
          updateTitle();
          break;
        case "Update employee manager":
          updateManager();
          break;
        // case "Remove an employee":
        // removeEmp();
        // break;

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
  start();
};

const empByDep = () => {
  connection.query(
    "SELECT title, role_id, first_name, last_name FROM employees ",
    (err, res) => {
      if (err) throw err;
      console.table("All employees by department", res);
    }
  );
  start();
};

const empByManager = () => {
  connection.query(
    "SELECT manager_id, first_name, last_name FROM employees",
    (err, res) => {
      if (err) throw err;
      console.table("All employees by manager", res);
    }
  );
  start();
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
    message: "What is the employee's role id",
  },
  {
    name: "title",
    type: "input",
    message: "What is the employee's department?",
  },
  {
    name: "manager_id",
    type: "input",
    message: "What is the employee's manager id",
  },
];

const addEmps = () => {
  //   if (err) throw err;
  inquirer.prompt(addEmpQuestions).then((answer) => {
    connection.query("INSERT INTO employees SET ?", {
      first_name: answer.first_name,
      last_name: answer.last_name,
      title: answer.title,
      role_id: answer.role_id,
      manager_id: answer.manager_id,
    });
    connection.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      console.table("All employees", res);
    });

    // console.table(answer)
    start();
  });
  //});
};

const updateId = [
  {
    name: "last_name",
    type: "input",
    message: "What is the last name of the employee you want to update?",
  },
  {
    name: "role_id",
    type: "input",
    message: "What is thier new role id?",
  },
];

const updateEmp = () => {
  inquirer.prompt(updateId).then((answer) => {
    connection.query("UPDATE employees SET role_id = ? WHERE last_name = ?", [
      // set new employee id
      // what employee is being updated
      answer.role_id,
      answer.last_name,
    ]);
    start();
    connection.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      console.table("Updated employees", res);
    });
  });
};

const titleQuestion = [
  {
    name: "last_name",
    type: "input",
    message: "What is the last name of the employee you want to update?",
  },
  {
    name: "title",
    type: "input",
    message: "What is thier new department?",
  },
];

updateTitle = () => {
  inquirer.prompt(titleQuestion).then((answer) => {
    connection.query("UPDATE employees SET title = ? WHERE last_name = ?", [
      answer.title,
      answer.last_name,
    ]);
    start();
    connection.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      console.table("Updated employees", res);
    });
  });
};

const managerUpdateQuestions = [
  {
    name: "empUpdate",
    type: "input",
    message:
      "What is the last name of the employee manager you want to update?",
  },
  {
    name: "managerUpdate",
    type: "input",
    message: "What is thier new manager id?",
  },
];

const updateManager = () => {
  inquirer.prompt(managerUpdateQuestions).then((answer) => {
    connection.query(
      "UPDATE employees SET manager_id = ? WHERE last_name = ?",
      [
        // set new employee id
        // what employee is being updated

        answer.managerUpdate,
        answer.empUpdate,
        console.table("Updated manager"),
      ]
    );
    start();
    connection.query("SELECT * FROM employees", (err, res) => {
      if (err) throw err;
      console.table("All employees", res);
    });
  });
};

// const removeEmpQuestions = [
//   {
//     name: "first_name",
//     type: "input",
//     message: "What is the first name of the employee you want to remove?",
//   },
//   {
//     name: "last_name",
//     type: "input",
//     message: "What is the last name of the employee you want to remove?",
//   },
// ];

// const removeEmp = () => {
//   inquirer.prompt(removeEmpQuestions).then((answer) => {
//     connection.query(
//       "DELETE FROM employees WHERE first_name = ? AND last_name = ?",
//       [
//         answer.first_name,
//         answer.last_name,
//         console.table(
//           `Deleted ${(answer.first_name, answer.last_name)} from database`
//         ),
//       ]
//     );
//     start();
//     connection.query("SELECT * FROM employees", (err, res) => {
//       if (err) throw err;
//       console.table("All employees", res);
//     });
//   });
// };

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();

  // ENDS SQL SERVER CONNECTION
  //connection.end();
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
