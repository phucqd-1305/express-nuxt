const sql = require('../database')

let User = {}

// Get user
User.getUserById = (userId, result) => {
  sql.query("select * from users where id = ?", userId, (err, res) => {
      if (err) {
        console.log("error: ", err)
        result(err, null);
      } else {
        result(null, res);
      }
  })
}

module.exports = User
