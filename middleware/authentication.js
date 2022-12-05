const {hasToken} = require('../helper/jwt')
const {Account} = require('../models')

async function authentication(req, res, next){
    try {
        const access_token = req.headers.access_token
        const decode = await hasToken(access_token)
        console.log(decode, "=== adakah?")
        const getAccount = await Account.findOne({
            where: {
                id : decode.id
            }
        })
        // console.log(getAccount, "=== inimi")

        if(getAccount){
            req.loginUser = decode
            next()
        } else{
            throw {
                status: 401,
                msg: 'please login'
            }
        }
        
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

module.exports = authentication