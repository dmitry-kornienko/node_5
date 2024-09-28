const Sequelize = require('sequelize')
const config = require('../config')
const db = require('../models')(Sequelize, config)

const all = async () => {
	try {
		return await db.turtles.findAll()
	} catch (error) {
		throw new Error('Failed to fetch turtles')
	}
}

const oneById = async id => {
	try {
		const turtle = await db.turtles.findOne({ where: { id } })
		if (!turtle) {
			throw new Error(`Turtle with id ${id} not found`)
		}
		return turtle
	} catch (error) {
		throw new Error(error.message)
	}
}

const create = async data => {
	try {
		return await db.turtles.create(data)
	} catch (error) {
		throw new Error('Failed to create turtle')
	}
}

const update = async (id, data) => {
	try {
		const [updatedCount] = await db.turtles.update(data, { where: { id } })
		if (!updatedCount) {
			throw new Error(`Turtle with id ${id} not found`)
		}
		return await oneById(id)
	} catch (error) {
		throw new Error('Failed to update turtle')
	}
}

const deleteById = async id => {
	try {
		const deletedCount = await db.turtles.destroy({ where: { id } })
		if (!deletedCount) {
			throw new Error(`Turtle with id ${id} not found`)
		}
		return deletedCount
	} catch (error) {
		throw new Error('Failed to delete turtle')
	}
}

module.exports = {
	all,
	oneById,
	create,
	update,
	deleteById,
}
