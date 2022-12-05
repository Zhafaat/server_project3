const {Product, Account, Categories, review} = require('../models')

class ProductController {
    static async createProduct(req, res, next){
        try {
            const body = req.body
            const data = await Product.create(body) // data in body include name, price and imageURL
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            next(error)
        }
    }

    static async readAllProduct(req, res, next){
        try {
            const data = await Product.findAll({
                include: [{
                    model: Account
                },{
                    model: Categories
                },{
                    model: review
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneProduct(req, res, next){
        try {
            const id = req.params.id
            const data = await Product.findAll({
                where: {
                    id: id
                },
                include: [{
                    model: Account
                },{
                    model: Categories
                },{
                    model: review
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async updateProduct(req, res, next){
        try {
            const body = req.body
            const id = req.params.id
            const data = await Product.update(body, { // data in body include name, price, or imageURL
                where: {
                    id: id
                }
            })
            if (data[0] == 1){
                res.status(200).json({message: "Success Update"})
            } else if (data[0] == 0) {
                throw {
                    status: 404,
                    msg: "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteProduct(req, res, next){
        try {
            const id = req.params.id
            const data = await Product.destroy({
                where: {
                    id: id
                }
            })
            if (data == 1) {
                res.status(200).json({message: "Success Delete"})
            } else if (data == 0) {
                throw {
                    status: 404,
                    msg: "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController