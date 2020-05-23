const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RutaSchema = new Schema({
    folio: {
        type: String,
        required: false
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    origen: {
        type: Schema.Types.ObjectId,
        ref: 'ubicacion'
    },
    destino: {
        type: Schema.Types.ObjectId,
        ref: 'ubicacion'
    },
    fecha_salida: {
        type: String,
        required: false
    },
    fecha_cita: {
        type: String,
        required: false
    }, 
    fecha_llegada: {
        type: String,
        required: false
    },
    linea_transporte: {
        type: Schema.Types.ObjectId,
        ref: 'linea_transporte'
    },
    operador: {
        type: Schema.Types.ObjectId,
        ref: 'operador'
    },
    camion: {
        type: Schema.Types.ObjectId,
        ref: 'camion'
    },
    caja: {
        type: Schema.Types.ObjectId,
        ref: 'caja'
    },
    equipo_gps: {
        type: Schema.Types.ObjectId,
        ref: 'equipo_gps'
    },
    numero_sello_caja: {
        type: String,
        required: false
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
    },
    status_ruta: {
        type: Schema.Types.ObjectId,
        ref: 'status_ruta'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    tracking:[{
        type: Schema.Types.ObjectId,
        ref:'tracking'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('ruta', RutaSchema);