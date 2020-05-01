const { Ruta } = require('../models');

const createRuta = (data) => Ruta.create(data);
const getAllRutas = () => Ruta.find({
    is_active: true
}).populate('cliente').populate('origen').populate('destinors').populate('linea_trasporte').populate('operador').populate('camion').populate('caja').populate('equipo_gps');

const getOneRuta = (id) => Ruta.findById({_id: id, is_active: true});
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

module.exports = {
    createRuta,
    getAllRutas,
    getOneRuta,
    deleteRuta,
    updateRuta,
    getRutaByFolio
};