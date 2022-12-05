const route = require('express').Router()
const {ProductController} = require('../controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


route.get('/', ProductController.readAllProduct)
route.get('/:id', ProductController.readOneProduct)

route.use(authentication)
route.use(authorization)
route.post('/', ProductController.createProduct)
route.put('/:id', ProductController.updateProduct)
route.delete('/:id', ProductController.deleteProduct)

module.exports = route