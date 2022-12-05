const route = require('express').Router()
const {CategoriesController} = require('../controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


route.get('/', CategoriesController.readAllCategories)
route.get('/:id', CategoriesController.readOneCategories)

route.use(authentication)
route.use(authorization)
route.post('/', CategoriesController.createCategories)
route.put('/:id', CategoriesController.updateCategories)
route.delete('/:id', CategoriesController.deleteCategories)

module.exports = route