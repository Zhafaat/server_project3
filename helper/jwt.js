const jwt = require('jsonwebtoken')

function getToken(payload){
    const token = jwt.sign(payload, 'zhafaat')
    return token
}

async function hasToken(token){
    try {
        const decode = await jwt.verify(token, 'zhafaat')
        return decode
    } catch (error) {
        throw {
            status: 401,
            msg: 'please login'
        }
    }
}

module.exports = {
    getToken,
    hasToken
}