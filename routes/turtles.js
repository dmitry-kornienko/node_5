const express = require('express')
const turtlesController = require('../controllers/turtles')

const turtlesRouter = express.Router()

turtlesRouter.get('/', turtlesController.getAllTurtles)
turtlesRouter.get('/:id', turtlesController.getTurtleById)
turtlesRouter.post('/', turtlesController.createTurtle)
turtlesRouter.put('/:id', turtlesController.updateTurtle)
turtlesRouter.delete('/:id', turtlesController.deleteTurtle)

module.exports = turtlesRouter
