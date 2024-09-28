const express = require('express')
const weaponsController = require('../controllers/weapons')

const weaponsRouter = express.Router()

weaponsRouter.get('/', weaponsController.getAllWeapons)
weaponsRouter.get('/:id', weaponsController.getWeaponById)
weaponsRouter.post('/', weaponsController.createWeapon)
weaponsRouter.put('/:id', weaponsController.updateWeapon)
weaponsRouter.delete('/:id', weaponsController.deleteWeapon)

module.exports = weaponsRouter
