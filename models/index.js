const Turtle = require('./turtle')
const Weapon = require('./weapon')
const Pizza = require('./pizza')

module.exports = (Sequelize, config) => {
	const { username, password, database, host, port, dialect, logging } = config

	const sequelize = new Sequelize(database, username, password, {
		host,
		dialect,
		port,
		logging,
	})

	const turtles = Turtle(Sequelize, sequelize)
	const weapons = Weapon(Sequelize, sequelize)
	const pizzas = Pizza(Sequelize, sequelize)

	// TODO: создание связей между таблицами

	return {
		turtles,
		weapons,
		pizzas,

		sequelize: sequelize,
		Sequelize: Sequelize,
	}
}
