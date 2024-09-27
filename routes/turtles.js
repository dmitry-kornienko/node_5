const express = require('express')
const turtlesController = require('../controllers/turtles')

const turtlesRouter = express.Router()

turtlesRouter.get('/', turtlesController.getAll)
turtlesRouter.get('/:id', turtlesController.getOne)
// filmsRouter.post('/', turtlesServices.create)
// filmsRouter.put('/', turtlesServices.update)
// filmsRouter.delete('/', turtlesServices.delete)

module.exports = turtlesRouter
