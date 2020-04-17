const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EquipoGpsSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: false
    },
    identificador: {
        type: String,
        required: true,
        unique: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('equipo_gps', EquipoGpsSchema);