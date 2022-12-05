const {Categories, Product} = require('../models')

class CategoriesController {
    static async createCategories(req, res, next){
        try {
            const body = req.body
            const data = await Categories.create(body) // data in body include firtsName, lastName, displayName, email, and password 
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            next(error)
        }
    }

    static async readAllCategories(req, res, next){
        try {
            const data = await Categories.findAll({
                include: [{
                    model: Product
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneCategories(req, res, next){
        try {
            const id = req.params.id
            const data = await Categories.findAll({
                where: {
                    id: id
                },
                include: [{
                    model: Product
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateCategories(req, res, next){
        try {
            const body = req.body
            const id = req.params.id
            const data = await Categories.update(body, { // data in body include firtsName, lastName, displayName, email, or password
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

    static async deleteCategories(req, res, next){
        try {
            const id = req.params.id
            const data = await Categories.destroy({
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

module.exports = CategoriesController