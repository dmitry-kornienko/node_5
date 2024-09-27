const turtlesServices = require('../services/turtles')

module.exports = turtlesController = {
	getAll: async (req, res) => {
		try {
			const turtles = await turtlesServices.all()

			return res.status(200).json(turtles)
		} catch (error) {
			res.status(500).json({ err: error })
		}
	},
	getOne: async (req, res) => {
		try {
			const turtle = await turtlesServices.oneById(req.params.id)

			return res.status(200).json(turtle)
		} catch (error) {
			res.status(500).json({ err: error })
		}
	},
}
