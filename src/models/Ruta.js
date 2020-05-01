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
    hora_salida: {
        type: String,
        required: false
    },
    hora_cita: {
        type: String,
        required: false
    }, 
    hora_llegada: {
        type: String,
        required: false
    },
    lineatransporte: {
        type: Schema.Types.ObjectId,
        ref: 'linea_trasporte'
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
    gps: {
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ruta', RutaSchema);