const mysql = require('mysql2');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgers_db',
});

module.exports = connection.promise();