const express = require('express')
const turtlesServices = require('../services/turtles')

const turtlesRouter = express.Router()

turtlesRouter.get('/', turtlesServices.getAll)
// filmsRouter.get('/:id', turtlesServices.getOne)
// filmsRouter.post('/', turtlesServices.create)
// filmsRouter.put('/', turtlesServices.update)
// filmsRouter.delete('/', turtlesServices.delete)

module.exports = turtlesRouter
