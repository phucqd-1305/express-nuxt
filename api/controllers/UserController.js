const config = require('../config')
const User = require('../models/User')
const validator = require('express-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
// Get User
module.exports.user = function(req, res) {
  var token = req.headers.authorization
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded) {
      if (err) {
        return res.status(401).json({message: 'unauthorized'})
      } else {
        return res.json({ user: decoded })
      }
    });
  }
  else{
    return res.status(401).json({message: 'unauthorized'})
  }
}

// Get one
module.exports.show = (req, res) => {
  let id = req.params.id;
  User.getUserById(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }

    res.json(user)
  })
}
