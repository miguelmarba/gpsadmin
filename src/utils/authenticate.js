const bcrypt = require('bcrypt');

const { getUserByEmail } = require('../services/UserService');
const createToken = require('./createToken');

const authenticate = ({email, password}) => {
    return new Promise((resolve, reject) => {
        getUserByEmail(email).then(user => {
            if(!user) reject(new Error('User not exists'));

            bcrypt.compare(password, user.password, (err, isValid) => {
                if(err) reject(new Error('Error to compare'));

                isValid ? resolve(createToken(user))
                    : reject(new Error('Incorrect password'));
            });
        });
    });
};

module.exports = authenticate;