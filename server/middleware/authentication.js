const { verifyToken } = require('../helper/jwt')
const { User } = require('../models/index')

async function authentication(req, res, next){
    let { token } = req.headers

    try {
        let decode = verifyToken(token)
        let dataUser = await User.findOne({ where: { email: decode.email }})

        if(!dataUser) throw { msg: "authentication failed" }
        else{
            req.loggedInUser = decode
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authentication