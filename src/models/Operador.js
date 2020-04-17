const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OperadorSchema = new Schema({
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
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: false
    },
    celular: {
        type: String,
        required: false
    },
    birth_date: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'] 
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('operador', OperadorSchema);