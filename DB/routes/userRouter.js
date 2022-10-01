const { Router } = require('express')
const router = new Router()
const userController = require('../controller/userController')

router.get('/users', userController.getUsers)
router.get('/posts', userController.getPosts)
router.get('/posts/:id',  userController.getCommentsByPost)


