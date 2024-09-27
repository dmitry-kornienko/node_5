require('dotenv').config()

module.exports = {
	username: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || 'defaultPassword',
	database: process.env.DB_NAME || 'mysql',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || 3306,
	dialect: process.env.DB_DIALECT || 'mysql',
	logging: process.env.DB_LOGGING === 'true',
}
