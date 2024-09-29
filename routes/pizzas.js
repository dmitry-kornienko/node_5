const express = require('express')
const pizzasController = require('../controllers/pizzas')

const pizzasRouter = express.Router()

pizzasRouter.get('/', pizzasController.getAllPizzas)
pizzasRouter.get('/:id', pizzasController.getPizzaById)
pizzasRouter.post('/', pizzasController.createPizza)
pizzasRouter.put('/:id', pizzasController.updatePizza)
pizzasRouter.delete('/:id', pizzasController.deletePizza)

module.exports = pizzasRouter
