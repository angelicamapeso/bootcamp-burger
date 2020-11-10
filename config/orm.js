const connection = require('./connection');

const orm = {
  selectAll: async (tableName) => {
    const [rows] = await connection.query('SELECT * FROM ??', [tableName]);
    return rows;
  },
  insertOne: async (tableName, data) => {
    const result = await connection.query('INSERT INTO ?? SET ?',
      [
        tableName,
        data
      ]);
    return result;
  },
  updateOne: async (tableName, data, identifier) => {
    const result = await connection.query('UPDATE ?? SET ? WHERE ?',
      [
        tableName,
        data,
        identifier
      ]);
    return result;
  },
  findById: async (tableName, id) => {
    const [rows] = await connection.query('SELECT * FROM ?? WHERE ?', [tableName, {id}]);
    return rows.length ? rows : null;
  }
}

module.exports = orm;