const jwt = require('jsonwebtoken');

const createToken = ({ email, nombre, apellido_paterno, rol}) => {
    const payload = {
        email, 
        nombre,
        apellido_paterno,
        rol
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1d'});
};

module.exports = createToken;