const express = require('express')
const Sequelize = require('sequelize')
require('dotenv').config()

const config = require('./config.js')

const turtlesRouter = require('./routes/turtles')
const weaponsRouter = require('./routes/weapons')
const pizzasRouter = require('./routes/pizzas')

const db = require('./models')(Sequelize, config)
const app = express()

app.use(express.json())

app.use('/api/turtles', turtlesRouter)
app.use('/api/weapons', weaponsRouter)
app.use('/api/pizzas', pizzasRouter)

db.sequelize.sync().then(() => {
	console.log('connected to DB')

	const port = process.env.PORT

	app.listen(port, () => console.log(`server started on PORT ${port}`))
})
