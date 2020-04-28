const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RutaSchema = new Schema({
    folio: {
        type: String,
        required: false
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    origen: {
        type: Schema.Types.ObjectId,
        ref: 'Ubicacion'
    },
    destino: {
        type: Schema.Types.ObjectId,
        ref: 'Ubicacion'
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
        ref: 'LineaTransporte'
    },
    operador: {
        type: Schema.Types.ObjectId,
        ref: 'Operador'
    },
    camion: {
        type: Schema.Types.ObjectId,
        ref: 'Camion'
    },
    caja: {
        type: Schema.Types.ObjectId,
        ref: 'Caja'
    },
    gps: {
        type: Schema.Types.ObjectId,
        ref: 'EquipoGps'
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