const Sequelize = require('sequelize')
const config = require('../config')
const db = require('../models')(Sequelize, config)

const all = async () => {
	try {
		return await db.weapons.findAll()
	} catch (error) {
		throw new Error('Failed to fetch weapons')
	}
}

const oneById = async id => {
	try {
		const weapon = await db.weapons.findOne({ where: { id } })
		if (!weapon) {
			throw new Error(`Weapon with id ${id} not found`)
		}
		return weapon
	} catch (error) {
		throw new Error(error.message)
	}
}

const create = async data => {
	try {
		return await db.weapons.create(data)
	} catch (error) {
		throw new Error('Failed to create weapon')
	}
}

const update = async (id, data) => {
	try {
		const [updatedCount] = await db.weapons.update(data, { where: { id } })
		if (!updatedCount) {
			throw new Error(`Weapon with id ${id} not found`)
		}
		return await oneById(id)
	} catch (error) {
		throw new Error('Failed to update weapon')
	}
}

const deleteById = async id => {
	try {
		const deletedCount = await db.weapons.destroy({ where: { id } })
		if (!deletedCount) {
			throw new Error(`Weapon with id ${id} not found`)
		}
		return deletedCount
	} catch (error) {
		throw new Error('Failed to delete weapon')
	}
}

module.exports = {
	all,
	oneById,
	create,
	update,
	deleteById,
}
