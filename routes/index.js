const route = require('express').Router()
const { Router } = require('express')
const {
    AccountController,
    AccountProductController,
    CategoriesController,
    ProductCategoriesController,
    ProductController,
    ReviewController
} = require('../controller')

const accountRoutes = require('./account')
const productRoutes = require('./product')
const reviewRoutes = require('./review')
const categoriesRoutes = require('./categories')
const itemRoutes = require('./item')
const cartRoutes = require('./cart')

// console.log(accountRoutes, "<< ACCOUNT ROUTES")
route.use('/account', accountRoutes)

route.use('/product', productRoutes)

route.use('/review', reviewRoutes)

route.use('/categories', categoriesRoutes)

route.use('/item', itemRoutes)

route.use('/cart', cartRoutes)


module.exports = route