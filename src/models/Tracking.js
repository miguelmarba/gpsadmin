const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackingSchema = new Schema({
    ruta: {
        type: Schema.Types.ObjectId,
        ref: 'ruta'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    status_ruta: {
        type: Schema.Types.ObjectId,
        ref: 'status_ruta'
    },
    comentarios: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('tracking', TrackingSchema);