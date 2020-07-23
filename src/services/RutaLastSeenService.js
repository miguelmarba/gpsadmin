const { RutaLastSeen } = require('../models');
const ObjectId = require('mongoose').Types.ObjectId; 

const createRutaLastSeen = async (data) => {
    const ruta_last = RutaLastSeen.create(data);
    return ruta_last;
};

const getAllRutaLastSeen = () => RutaLastSeen.find({
    is_active: true
}).
limit(10).
sort({ fecha_consulta: -1 }).
populate('user').
    populate({
        path: 'ruta',
        populate: { path: 'cliente' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'origen' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'destino' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'linea_transporte' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'operador' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'camion' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'caja' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'equipo_gps' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'status_ruta' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'user' }
    });

const getAllRutaLastSeenByUser = (user_id) => RutaLastSeen.find({
    $and:[
        {is_active: true},
        {user: ObjectId(user_id)}
    ]
}).
limit(10).
sort({ fecha_consulta: -1 }).
populate('user').
    populate({
        path: 'ruta',
        populate: { path: 'cliente' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'origen' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'destino' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'linea_transporte' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'operador' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'camion' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'caja' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'equipo_gps' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'status_ruta' }
    }).
    populate({
        path: 'ruta',
        populate: { path: 'user' }
    });

const deleteRutaLastSeen = (id) => RutaLastSeen.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateRutaLastSeen = (id, data) => RutaLastSeen.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});

const getRutaLastSeenByDates = (begin, end) => RutaLastSeen.find({
    fecha_consulta: {$gte:begin, $lte:end},
    is_active: true
}).populate('ruta').populate('user');

module.exports = {
    createRutaLastSeen,
    getAllRutaLastSeen,
    deleteRutaLastSeen,
    updateRutaLastSeen,
    getRutaLastSeenByDates,
    getAllRutaLastSeenByUser
};