const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CajaSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    placas: {
        type: String,
        required: true
    },
    placas_americanas: {
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

module.exports = mongoose.model('caja', CajaSchema);