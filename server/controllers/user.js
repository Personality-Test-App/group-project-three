const { User } = require('../models/index')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../helper/jwt')
class UserController{

    static login(req, res, next){
        const { email, password } = req.body
        User.findOne({
            where: { email }
        })
            .then((dataUser) => {
                if(!dataUser){
                    throw { msg: "invalid email or password"}
                }
                const samePassword = bcrypt.compareSync(password, dataUser.password)

                if(!samePassword){
                    throw { msg: "invalid email or password"}
                }
                else{
                    let payload = { id: dataUser.id, email: dataUser.email}
                    let token = generateToken(payload)
                    res.status(201).json({ token })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = UserController