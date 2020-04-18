const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StatusRutaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('status_ruta', StatusRutaSchema);