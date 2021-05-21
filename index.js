const inquirer = require("inquirer");

const mysql = require("mysql");

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

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});

const afterConnection = () => {
  // aysync operation, callback functions, promises, aysync/await
  // data is what isi returned from the query from database
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
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
