const express = require('express')
const db = require('./database')


// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const users = require('./routes/users')
// Use API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
