const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, 'rahasia')
}

function verifyToken(token){
    return jwt.verify(token, 'rahasia')
}

module.exports = { generateToken, verifyToken }