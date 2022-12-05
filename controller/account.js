const {Account, Product, review} = require('../models')
const { getToken } = require('../helper/jwt')
const { encryptPass, comparePassword } = require('../helper/bcrypt')

class AccountController {
    static async adminAccount(req, res, next){
        try {
            const body = req.body
            const data = await Account.create(body)
            res.status(200).json({message: 'Success Insert'})
        } catch (error) {
            next(error)
        }
    }

    static async createAccount(req, res, next){
        try {
            const body = req.body

            const password = req.body.password
            const encryptPassword = encryptPass(password)
            body.password = encryptPassword

            const data = await Account.create(body) // data in body include firtsName, lastName, displayName, email, and password 
            res.status(200).json({message: "Success Insert"})
        } catch (error) {
            // console.log(error)
            next(error)
            // res.status(400).json({message: "Bad Request"})
        }
    }

    static async readAllAccount(req, res, next){
        try {
            const data = await Account.findAll({
                include: [{
                    model: Product,
                    as: 'Chart'
                }, {
                    model: review
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async readOneAccount(req, res, next){
        try {
            const id = req.loginUser.id
            const data = await Account.findOne({
                where: {
                    id: id
                },
                include: [{
                    model: Product,
                    as: 'Chart'
                },{
                    model: review
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateAccount(req, res, next){
        try {
            const body = req.body

            const password = req.body.password
            const encryptPassword = encryptPass(password)
            body.password = encryptPassword

            const id = req.loginUser.id
            const data = await Account.update(body, { // data in body include firtsName, lastName, displayName, email, or password
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

    static async deleteAccount(req, res, next){
        try {
            const id = req.loginUser.id
            const data = await Account.destroy({
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

    static async login(req, res, next){
        try {
            // console.log("=== masukkah?")
            const body = req.body
            const loginAccount = await Account.findOne({
                where : {
                    email: body.email
                }
            })
            if (loginAccount){
                if (comparePassword(body.password, loginAccount.password)){
                    const payload = {
                        id : loginAccount.id,
                        email : loginAccount.email,
                        role : loginAccount.role
                    }
                    // console.log(payload, "=== before encode ===")
                    const access_token = getToken(payload)
                    // console.log(access_token, "=== after encode ===")
                    res.status(200).json({access_token})
                } else {
                    throw {
                        status: 404,
                        msg: 'wrong email/password'
                    }
                }
            } else {
                throw{
                    status: 404,
                    msg: 'wrong email/password'
                }
            }
        } catch (error) {
            next(error)            
        }
    }
}

module.exports = AccountController