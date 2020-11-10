const mysql = require('mysql2');

let connection;

try {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db',
  });
} catch(err) {
  console.error(err);
  process.exit(1);
}

module.exports = connection.promise();