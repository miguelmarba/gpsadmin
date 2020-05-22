const { Ruta } = require('../models');

const createRuta = async (data) => {
    const ruta = Ruta.create(data);
    return ruta;
};
const getAllRutas = () => Ruta.find({
    is_active: true
}).populate('cliente').populate('origen').populate('destino').populate('linea_transporte').populate('operador').populate('camion').populate('caja').populate('equipo_gps').populate('status_ruta').populate('user');

const getOneRuta = (id) => Ruta.findById(
    { _id: id, 
        is_active: true
    }).populate('cliente').populate('origen').populate('destino').populate('linea_transporte').populate('operador').populate('camion').populate('caja').populate('equipo_gps').populate('status_ruta').populate('user').populate({
    path: 'tracking',
    model: 'tracking'
});

const deleteRuta = (id) => Ruta.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateRuta = (id, data) => Ruta.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});

const getRutaByFolio = (folio) => Ruta.findOne({folio, is_active: true});

const getRutasByDates = (begin, end) => Ruta.find({
    fecha_salida: {$gte:begin, $lte:end},
    is_active: true
}).populate('cliente').populate('origen').populate('destino').populate('linea_transporte').populate('operador').populate('camion').populate('caja').populate('equipo_gps').populate('status_ruta').populate('user');

module.exports = {
    createRuta,
    getAllRutas,
    getOneRuta,
    deleteRuta,
    updateRuta,
    getRutaByFolio,
    getRutasByDates
};