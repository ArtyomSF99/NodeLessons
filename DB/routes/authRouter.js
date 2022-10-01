const Router = require('express')
const authController = require('../controller/auth.controller')
const router = new Router()
const {check} = require('express-validator')


router.post('/registration', authController.registration)
router.post('/login', authController.login)

