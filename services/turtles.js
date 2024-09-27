const Sequelize = require('sequelize')
const config = require('../config')

const db = require('../models')(Sequelize, config)

const all = async () => {
	try {
		const data = await db.turtles.findAll()
		return data
	} catch (error) {}
	return error
}

const oneById = async id => {
	try {
		const data = await db.turtles.findOne({ where: { id } })
		return data
	} catch (error) {}
	return error
}

module.exports = {
	all,
	oneById,
}
