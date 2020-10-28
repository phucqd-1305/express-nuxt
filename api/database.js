const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aa@123456',
  database: 'express'
})

connection.connect(function(err) {
  if (err) throw err;
});

// connection.end()

module.exports = connection
