const route = require('express').Router()
const {ReviewController} = require('../controller')
const authentication = require('../middleware/authentication')
const reviewAuthorization = require('../middleware/reviewAuthorization')


route.get('/', ReviewController.readAllReview)
route.get('/:id', ReviewController.readOneReview)

route.use(authentication)
route.post('/', ReviewController.createReview)

// route.use('/:id',reviewAuthorization)
route.put('/:id', reviewAuthorization ,ReviewController.updateReview)
route.delete('/:id', reviewAuthorization, ReviewController.deleteReview)

module.exports = route