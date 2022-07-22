// we are going to create an api with Nodejs and express for an airline company. 
// we will use the express framework to create our api

const express = require('express');
const mysql = require('mysql');

// bodyParser is a middleware that is used to parse the body of the request
const bodyParser = require('body-parser');

// const for port

const PORT = process.env.PORT || 3000;

// const for app
const app = express();
app.use(bodyParser.json());

// MySQL connection settings for the database 
const connection = mysql.createConnection({ 
  host: 'localhost',
  user: 'root',
  password: 'rootPass',
  database: 'airline_mysql'
});

// Check connect
connection.connect((err) => {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
  console.log('connected as id ' + connection.threadId);
});

// listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});