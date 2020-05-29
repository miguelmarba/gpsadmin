const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StatusRutaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('status_ruta', StatusRutaSchema);