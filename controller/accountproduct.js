const { accountProduct } = require('../models')

class AccountProductController{
    static async createAccountProduct(req, res, next){
        try {
            const body = req.body
            const data = await accountProduct.create(body)
            // data in body include quantity, account_id, product_id
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            next(error)
        }
    }

    static async readAllAccountProduct(req, res, next){
        try {
            const data = await accountProduct.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneAccountProduct(req, res, next){
        try {
            const id = req.params.id
            const data = await accountProduct.findAll({
                where: {
                    id: id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateAccountProduct(req, res, next){
        try {
            const body = req.body
            const id = req.params.id
            const data = await accountProduct.update(body, { // data in body include firtsName, lastName, displayName, email, or password
                where: {
                    id: id
                }
            }) 
            if (data[0] == 1){
                res.status(200).json({message: "Success Update"})
            } else if (data[0] == 0) {
                res.status(404).json({message: "Not Found"})
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteAccountProduct(req, res, next){
        try {
            const id = req.params.id
            const data = await accountProduct.destroy({
                where: {
                    id: id
                }
            })
            if (data == 1) {
                res.status(200).json({message: "Success Delete"})
            } else if (data == 0) {
                res.status(404).json({message: "Not Found"})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AccountProductController