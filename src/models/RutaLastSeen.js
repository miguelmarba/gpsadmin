const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RutaLastSeenSchema = new Schema({
    ruta: {
        type: Schema.Types.ObjectId,
        ref: 'ruta'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    fecha_consulta: {
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

module.exports = mongoose.model('ruta_last_seen', RutaLastSeenSchema);