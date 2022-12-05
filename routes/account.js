const route = require('express').Router()
const {AccountController} = require('../controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.post('/Admin', AccountController.adminAccount)
route.post('/', AccountController.createAccount)
route.post('/login', AccountController.login)

route.use(authentication)
route.get('/', AccountController.readOneAccount)
route.put('/', AccountController.updateAccount)
route.delete('/', AccountController.deleteAccount)

route.use(authorization)
route.get('/allAccount', AccountController.readAllAccount)

module.exports = route