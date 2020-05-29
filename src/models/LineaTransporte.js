const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LineaTransporteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: false
    },
    celular: {
        type: String,
        required: false
    },
    cp: {
        type: String,
        required: false
    },
    georeferenciax: {
        type: String,
        required: false
    },
    georeferenciay: {
        type: String,
        required: false
    },
    direccion: {
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

module.exports = mongoose.model('linea_transporte', LineaTransporteSchema);