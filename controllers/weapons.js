const weaponsServices = require('../services/weapons')

module.exports = weaponsController = {
	getAllWeapons: async (req, res) => {
		try {
			const weapons = await weaponsServices.all()
			return res.status(200).json(weapons)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	getWeaponById: async (req, res) => {
		try {
			const weapon = await weaponsServices.oneById(req.params.id)
			return res.status(200).json(weapon)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	createWeapon: async (req, res) => {
		try {
			const weapon = await weaponsServices.create(req.body)
			return res.status(201).json(weapon)
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	},

	updateWeapon: async (req, res) => {
		try {
			const updatedWeapon = await weaponsServices.update(
				req.params.id,
				req.body
			)
			return res.status(200).json(updatedWeapon)
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},

	deleteWeapon: async (req, res) => {
		try {
			await weaponsServices.deleteById(req.params.id)
			return res.status(204).send()
		} catch (error) {
			res.status(404).json({ error: error.message })
		}
	},
}
