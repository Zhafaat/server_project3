const {review} = require('../models')

class ReviewController {
    static async createReview(req, res, next){
        try {
            const body = req.body
            const data = await review.create(body) // data in body include name, price and imageURL
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            next(error)
        }
    }

    static async readAllReview(req, res, next){
        try {
            const data = await review.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneReview(req, res, next){
        try {
            const id = req.params.id
            const data = await review.findAll({
                where: {
                    id: id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateReview(req, res, next){
        try {
            const body = req.body
            const id = req.params.id
            const data = await review.update(body, { // data in body include name, price, or imageURL
                where: {
                    id: id
                }
            })
            if (data[0] == 1){
                res.status(200).json({message: "Success Update"})
            } else if (data[0] == 0) {
                throw{
                    status: 404,
                    msg: "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteReview(req, res, next){
        try {
            const id = req.params.id
            const data = await review.destroy({
                where: {
                    id: id
                }
            })
            if (data == 1) {
                res.status(200).json({message: "Success Delete"})
            } else if (data == 0) {
                throw{
                    status: 404,
                    msg: "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ReviewController