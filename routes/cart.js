const route = require('express').Router()
const {AccountProductController} = require('../controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const cartAuthorization = require('../middleware/cartAuthorization')

route.use(authentication)
route.post('/', AccountProductController.createAccountProduct)
route.put('/:id', cartAuthorization, AccountProductController.updateAccountProduct)
route.delete('/:id', cartAuthorization, AccountProductController.deleteAccountProduct)
route.get('/:id', AccountProductController.readOneAccountProduct)


route.use(authorization)
route.get('/', AccountProductController.readAllAccountProduct)

module.exports = route