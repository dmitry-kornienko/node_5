const express = require('express')
const Sequelize = require('sequelize')

const config = require('../config')
const db = require('../models')(Sequelize, config)

const task02Router = express.Router()
// 1. Выведем всех черепашек-ниндзя
task02Router.get('/1', async (req, res) => {
	try {
		const result = await db.turtles.findAll()

		return res.status(200).json(result)
	} catch (error) {
		res.status(400).send()
	}
})
// 2. Выведем всех черепашек-ниндзя у кого любимая пицца "Mozzarella"
task02Router.get('/2', async (req, res) => {
	try {
		const result = await db.turtles.findAll({
			include: [
				{
					model: db.pizzas,
					as: 'firstFavoritePizza',
					where: { name: 'Mozzarella' },
				},
			],
		})

		return res.status(200).json(result)
	} catch (error) {
		res.status(400).send()
	}
})
// 3. Выведем все пиццы отмеченные как любимые без повторов
task02Router.get('/3', async (req, res) => {
	try {
		const turtlesWithFavoritePizzas = await db.turtles.findAll({
			include: [
				{
					model: db.pizzas,
					as: 'firstFavoritePizza',
					attributes: ['name'],
				},
				{
					model: db.pizzas,
					as: 'secondFavoritePizza',
					attributes: ['name'],
				},
			],
		})

		const favoritePizzas = turtlesWithFavoritePizzas.map(turtle => [
			turtle.firstFavoritePizza ? turtle.firstFavoritePizza.name : null,
			turtle.secondFavoritePizza ? turtle.secondFavoritePizza.name : null,
		])

		const uniqueFavoritePizzas = [...new Set(favoritePizzas.flat())].filter(
			Boolean
		)

		if (uniqueFavoritePizzas.length === 0) {
			return res.status(404).json({ message: 'No favorite pizzas found' })
		}

		return res.json(uniqueFavoritePizzas)
	} catch (error) {
		res.status(400).send()
	}
})
// 4. Создадим пятую черепашку с вашим именем и любимым цветом. Незабываем про оружие
task02Router.post('/4', async (req, res) => {
	try {
		const myTurtle = await db.turtles.create({
			name: 'Dima',
			color: 'white',
			weaponId: 4,
		})

		return res.status(200).json(myTurtle)
	} catch (error) {
		res.status(400).send()
	}
})
// 5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"
task02Router.put('/5', async (req, res) => {
	try {
		const [updatedCount] = await db.pizzas.update(
			{
				description: db.Sequelize.fn(
					'CONCAT',
					db.Sequelize.col('description'),
					' SUPER FAT!'
				),
			},
			{ where: { calories: { [db.Sequelize.Op.gte]: 3000 } } }
		)

		return res.status(200).json(updatedCount)
	} catch (error) {
		res.status(400).send()
	}
})
// 6. Запросим число оружий с dps больше 100
task02Router.get('/6', async (req, res) => {
	try {
		const result = await db.weapons.findAll({
			where: { dps: { [db.Sequelize.Op.gt]: 100 } },
		})

		return res.status(200).json(result)
	} catch (error) {
		res.status(400).send()
	}
})
// 7. Найдем пиццу с id равным 1
task02Router.get('/7', async (req, res) => {
	try {
		const result = await db.pizzas.findAll({
			where: { id: 1 },
		})

		return res.status(200).json(result)
	} catch (error) {
		res.status(400).send()
	}
})
// 8. Добавим пятой черепашке любимую пиццу через объект черепахи
task02Router.get('/8', async (req, res) => {
	try {
		const [updated] = await db.turtles.update(
			{ firstFavoritePizzaId: 8 },
			{ where: { id: 5 } }
		)

		return res.status(200).json(updated)
	} catch (error) {
		res.status(400).send()
	}
})

module.exports = task02Router
