const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UbicacionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    cp: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: false
    },
    numero_exterior: {
        type: String,
        required: false
    },
    numero_interior: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    municipio: {
        type: String,
        required: false
    },
    pais: {
        type: String,
        required: false
    },
    georeferenciax: {
        type: String,
        required: false
    },
    georeferenciay: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ubicacion', UbicacionSchema);