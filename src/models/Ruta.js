const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RutaSchema = new Schema({
    folio: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    hora_salida: {
        type: String,
        required: true
    },
    hora_cita: {
        type: String,
        required: true
    }, 
    hora_llegada: {
        type: String,
        required: true
    },
    numero_sello_caja: {
        type: String,
        required: true
    },
    tipo_servicio: {
        type: String,
        enum: ['EXPRESS', 'NORMAL', 'O'] 
    },
    tipo_monitoreo: {
        type: String,
        enum: ['DEDICADO', 'CUSTODIA', 'O'] 
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ruta', RutaSchema);