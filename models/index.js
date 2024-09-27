const Turtle = require('./turtle')
const Weapon = require('./weapon')
const Pizza = require('./pizza')

module.exports = (Sequelize, config) => {
	const { username, password, database, host, dialect, logging } = config

	const sequelize = new Sequelize(database, username, password, {
		host,
		dialect,
		logging,
	})

	const turtles = Turtle(Sequelize, sequelize)
	const weapons = Weapon(Sequelize, sequelize)
	const pizzas = Pizza(Sequelize, sequelize)

	turtles.belongsTo(weapons)

	turtles.belongsTo(pizzas, { as: 'firstFavoritePizza' })
	turtles.belongsTo(pizzas, { as: 'secondFavoritePizza' })

	weapons.hasMany(turtles)
	pizzas.hasMany(turtles, { foreignKey: 'firstFavoritePizzaId' })
	pizzas.hasMany(turtles, { foreignKey: 'secondFavoritePizzaId' })

	return {
		turtles,
		weapons,
		pizzas,

		sequelize: sequelize,
		Sequelize: Sequelize,
	}
}
