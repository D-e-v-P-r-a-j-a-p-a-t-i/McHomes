const { welcomeHome, setHomes, getHomes, getHomeById } = require('../controller/home.controller')

const homeRouter = require('express').Router()

homeRouter.get('', welcomeHome)
homeRouter.get('/getHomes', getHomes)
homeRouter.get('/getHomes/:id', getHomeById)

module.exports = homeRouter