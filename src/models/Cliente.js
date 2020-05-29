const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    tipo_persona: {
        type: String,
        enum: ['FISICA', 'MORAL', 'O'] 
    },
    nombre: {
        type: String,
        required: true
    },
    rfc: {
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
        type: String
    },
    direccion: {
        type: String
    },
    rutas:{
        type: [Schema.Types.ObjectId],
        ref:'Ruta'
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

module.exports = mongoose.model('cliente', ClienteSchema);