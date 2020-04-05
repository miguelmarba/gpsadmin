const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

CustomerSchema.pre('save', function(next){
    const user = this;
    const SALT_FACTOR = 10; // Número de veces que se va encriptar
    if(!user.isModified('password')) { return next(); }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){ 
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(error, hash){
            if(error) return next(error);
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('user', CustomerSchema);