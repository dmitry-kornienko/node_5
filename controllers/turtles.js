const turtlesServices = require('../services/turtles')

module.exports = turtlesController = {
	getAllTurtles: async (req, res) => {
		try {
			const turtles = await turtlesServices.all()
			return res.status(200).json(turtles)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	getTurtleById: async (req, res) => {
		try {
			const turtle = await turtlesServices.oneById(req.params.id)
			return res.status(200).json(turtle)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	createTurtle: async (req, res) => {
		try {
			const turtle = await turtlesServices.create(req.body)
			return res.status(201).json(turtle)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	updateTurtle: async (req, res) => {
		try {
			const updatedTurtle = await turtlesServices.update(
				req.params.id,
				req.body
			)
			return res.status(200).json(updatedTurtle)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	deleteTurtle: async (req, res) => {
		try {
			await turtlesServices.deleteById(req.params.id)
			return res.status(204).send()
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},
}
