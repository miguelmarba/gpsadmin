const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RutaLastViewSchema = new Schema({
    fecha_consulta: {
        type: String,
        required: false
    },
    ruta: {
        type: Schema.Types.ObjectId,
        ref: 'ruta'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ruta_last_view', RutaLastViewSchema);