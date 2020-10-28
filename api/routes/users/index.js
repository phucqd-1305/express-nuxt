const config = require('../../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const usersController = require('../../controllers/UserController')

// Register
//router.post('/users/register', usersController.register)

// Login
//router.post('/users/login', usersController.login)

// Get User
router.get('/users/:id', usersController.show)

module.exports = router
