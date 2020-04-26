const { Caja } = require('../models');

const createCaja = (data) => Caja.create(data);
const getAllCajas = () => Caja.find({is_active: true});
const getOneCaja = (id) => Caja.findById({_id: id, is_active: true});
const deleteCaja = (id) => Caja.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateCaja = (id, data) => Caja.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getCajaByDescripcion = (descripcion) => Caja.find({descripcion: {$regex: descripcion, $options: 'i'}, is_active: true});

module.exports = {
    createCaja,
    getAllCajas,
    getOneCaja,
    deleteCaja,
    updateCaja,
    getCajaByDescripcion
};