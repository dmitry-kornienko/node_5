module.exports = (Sequelize, sequelize) => {
	return sequelize.define('pizzas', {
		// TODO: описание полей
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		calories: {
			type: Sequelize.DOUBLE,
		},
	})
}
