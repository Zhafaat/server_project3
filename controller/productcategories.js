const { productCategories} = require('../models')

class ProductCategoriesController{
    static async createProductCategories(req, res, next){
        try {
            const body = req.body
            const data = await productCategories.create(body)
            // data in body include quantity, account_id, product_id
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async readAllProductCategories(req, res, next){
        try {
            const data = await productCategories.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneProductCategories(req, res, next){
        try {
            const id = req.params.id
            const data = await productCategories.findAll({
                where: {
                    id: id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateProductCategories(req, res, next){
        try {
            const body = req.body
            const id = req.params.id
            const data = await productCategories.update(body, { // data in body include firtsName, lastName, displayName, email, or password
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

    static async deleteProductCategories(req, res, next){
        try {
            const id = req.params.id
            const data = await productCategories.destroy({
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

module.exports = ProductCategoriesController