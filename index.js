const express = require('express')
const Sequelize = require('sequelize')
require('dotenv').config()

const config = require('./config.js')

const turtlesRouter = require('./routes/turtles')
const weaponsRouter = require('./routes/weapons')
const pizzasRouter = require('./routes/pizzas')

const task02Router = require('./routes/task02')

const db = require('./models')(Sequelize, config)
const app = express()

app.use(express.json())

app.use('/api/turtles', turtlesRouter)
app.use('/api/weapons', weaponsRouter)
app.use('/api/pizzas', pizzasRouter)

app.use('/api/task02', task02Router)

db.sequelize.sync().then(() => {
	console.log('connected to DB')

	const port = process.env.PORT

	app.listen(port, () => console.log(`server started on PORT ${port}`))
})
