const { RutaLastView } = require('../models');
const ObjectId = require('mongoose').Types.ObjectId; 

const createRutaLastView = async (data) => {
    const ruta_last = RutaLastView.create(data);
    return ruta_last;
};
const getAllRutas = () => RutaLastView.find({
    is_active: true
}).populate('ruta').
    populate('user');

const getAllRutasByStatus = (status) => RutaLastView.find({
    $and:[
        {is_active: true},
        {status_ruta: ObjectId(status)}
    ]
}).populate('ruta').
    populate('user');

const getOneRuta = (id) => RutaLastView.findById(
    { _id: id, 
        is_active: true
    }).populate('cliente').
    populate('origen').
    populate('destino').
    populate('linea_transporte').
    populate('operador').
    populate('camion').
    populate('caja').
    populate('equipo_gps').
    populate('status_ruta').
    populate('user').
    populate({
        path: 'tracking',
        populate: { path: 'user' }
    }).
    populate({
        path: 'tracking',
        populate: { path: 'status_ruta'}
    });

const deleteRuta = (id) => RutaLastView.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateRuta = (id, data) => RutaLastView.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});

const getRutaByFolio = (folio) => RutaLastView.findOne({folio, is_active: true});

const getRutasByDates = (begin, end) => RutaLastView.find({
    fecha_salida: {$gte:begin, $lte:end},
    is_active: true
}).populate('cliente').populate('origen').populate('destino').populate('linea_transporte').populate('operador').populate('camion').populate('caja').populate('equipo_gps').populate('status_ruta').populate('user');

module.exports = {
    createRutaLastView,
    getAllRutas,
    getOneRuta,
    deleteRuta,
    updateRuta,
    getRutaByFolio,
    getRutasByDates,
    getAllRutasByStatus
};