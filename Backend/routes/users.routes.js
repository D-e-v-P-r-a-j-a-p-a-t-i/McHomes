const { welcomeUser, addUser, authUser } = require('../controller/user.controller')

const userRouter = require('express').Router()

userRouter.get('', welcomeUser)
userRouter.post('/addUser', addUser)
userRouter.post('/login', authUser)

module.exports = userRouter