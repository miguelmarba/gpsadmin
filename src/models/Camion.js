const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CamionSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    },
    placas: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    cuenta_espejo: {
        type: String,
        required: false
    },
    tipo_unidad: {
        type: String,
        enum: ['TRAILER', 'TORTON', 'TRESCINCO', 'UNOCINCO', 'O'] 
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('camion', CamionSchema);