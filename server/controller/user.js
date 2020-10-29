const { User } = require('../models/index')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../helper/jwt')
class UserController{
    static register(req, res, next){
        const { email, password } = req.body

        User.create({email, password})
            .then((dataUser) => {
                res.status(201).json({
                    id: dataUser.id,
                    email: dataUser.email,
                    msg: "register success"
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = UserController