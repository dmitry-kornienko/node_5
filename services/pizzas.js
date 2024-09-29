const Sequelize = require('sequelize')
const config = require('../config')
const db = require('../models')(Sequelize, config)

const all = async () => {
	try {
		return await db.pizzas.findAll()
	} catch (error) {
		throw new Error('Failed to fetch pizzas')
	}
}

const oneById = async id => {
	try {
		const pizza = await db.pizzas.findOne({ where: { id } })
		if (!pizza) {
			throw new Error(`Pizza with id ${id} not found`)
		}
		return pizza
	} catch (error) {
		throw new Error(error.message)
	}
}

const create = async data => {
	try {
		return await db.pizzas.create(data)
	} catch (error) {
		throw new Error('Failed to create pizza')
	}
}

const update = async (id, data) => {
	try {
		const [updatedCount] = await db.pizzas.update(data, { where: { id } })
		if (!updatedCount) {
			throw new Error(`Pizza with id ${id} not found`)
		}
		return await oneById(id)
	} catch (error) {
		throw new Error('Failed to update pizza')
	}
}

const deleteById = async id => {
	try {
		const deletedCount = await db.pizzas.destroy({ where: { id } })
		if (!deletedCount) {
			throw new Error(`Pizza with id ${id} not found`)
		}
		return deletedCount
	} catch (error) {
		throw new Error('Failed to delete pizza')
	}
}

module.exports = {
	all,
	oneById,
	create,
	update,
	deleteById,
}
