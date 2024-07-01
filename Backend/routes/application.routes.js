const { apply } = require('../controller/application.controller')

const applicationRouter = require('express').Router()

applicationRouter.post('/apply', apply)

module.exports = applicationRouter