const route = require('express').Router()
const {ProductCategoriesController} = require('../controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

route.use(authentication)
route.use(authorization)
route.post('/', ProductCategoriesController.createProductCategories)
route.get('/', ProductCategoriesController.readAllProductCategories)
route.get('/:id', ProductCategoriesController.readOneProductCategories)
route.put('/:id', ProductCategoriesController.updateProductCategories)
route.delete('/:id', ProductCategoriesController.deleteProductCategories)

module.exports = route