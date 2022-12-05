const {review} = require('../models')

async function reviewAuthorization (req, res, next){
    try {
        const userId = req.loginUser.id
        const reviewId = req.params.id

        const accessReview = await review.findOne({
            where: {
                id: reviewId
            }
        })

        // console.log(accessReview, "=== ambil review")

        if (accessReview.account_id == userId){
            next()
        } else {
            throw {
                status: 401,
                msg: 'unauthorize access'
            }
        }
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

module.exports = reviewAuthorization