const {accountProduct} = require('../models')
const {Op} = require('sequelize')

async function cartAuthorization(req, res, next){
    try {
        const userId = req.loginUser.id
        const role = req.loginUser.role
        const cartId = req.params.id

        if(role === 'user'){
            const findCart = await accountProduct.findOne({
                where: {
                    id: cartId
                }
            })
            if(findCart){
                const validation = await accountProduct.findOne({
                    where: {
                        [Op.and]:[
                            {id: cartId},
                            {account_id: userId}
                        ]
                    }
                })
                if(validation){
                    next()
                } else {
                    throw {
                        status: 401,
                        msg: 'Unauthorize Access'
                    }
                }
            } else {
                throw {
                    status: 404,
                    msg: 'Not Found'
                }
            }
        } else {
            throw {
                status: 404,
                msg: 'Unauthorize Access'
            }
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = cartAuthorization