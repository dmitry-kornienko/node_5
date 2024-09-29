const pizzasServices = require('../services/pizzas')

module.exports = pizzasController = {
	getAllPizzas: async (req, res) => {
		try {
			const pizzas = await pizzasServices.all()
			return res.status(200).json(pizzas)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	getPizzaById: async (req, res) => {
		try {
			const pizza = await pizzasServices.oneById(req.params.id)
			return res.status(200).json(pizza)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	createPizza: async (req, res) => {
		try {
			const pizza = await pizzasServices.create(req.body)
			return res.status(201).json(pizza)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	updatePizza: async (req, res) => {
		try {
			const updatedPizza = await pizzasServices.update(req.params.id, req.body)
			return res.status(200).json(updatedPizza)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	deletePizza: async (req, res) => {
		try {
			await pizzasServices.deleteById(req.params.id)
			return res.status(204).send()
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},
}
