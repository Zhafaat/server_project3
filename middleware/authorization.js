async function authorization (req, res, next){
    try {
        const role = req.loginUser.role
        if (role === 'admin'){
            next()
        } else {
            throw {
                status: 401,
                msg: 'Unauthorize Access'
            }
        }
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

module.exports = authorization