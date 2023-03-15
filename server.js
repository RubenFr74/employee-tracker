//======== Dependencies===================//
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "BorealValley12]3",
    database: "employee_trackerDB"
  });