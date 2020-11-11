const mysql = require('mysql2');

let connection;

try {
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'burgers_db',
    });
  }
} catch(err) {
  console.error(err);
  process.exit(1);
}

module.exports = connection.promise();