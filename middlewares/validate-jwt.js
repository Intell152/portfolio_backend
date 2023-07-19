const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');
    const key = process.env.PRIVATEKEY;

    
    if ( !token ) {
        return res.status(401).json({
            msg: 'Sin autorización'
        })
    }

    try {
        jwt.verify( token, key );

        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Tkn Sin autorización'
        })
    }
}

module.exports = {
    validarJWT
}