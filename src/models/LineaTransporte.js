const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LineaTransporteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    contacto: {
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
    cp: {
        type: String
    },
    georeferenciax: {
        type: String
    },
    georeferenciay: {
        type: String
    },
    direccion: {
        type: Date
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('linea_trasporte', LineaTransporteSchema);