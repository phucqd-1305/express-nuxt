const jwt = require('jsonwebtoken')

const config = {
  authSecret: 'secretkey',
}

module.export = config

// check if user logied in
module.export.isAuthenticated = function (req, res, next) {
  let token = req.header.authorization
  if (token) {
    // verify secret and check token is expired
    jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded) {
      if (err) {
        return res.status(401).json({message: 'unauthorized'})
      } else {
        return next();
      }
    });
  } else {
    return res.status(401).json({message: 'unauthorized'})
  }
}
