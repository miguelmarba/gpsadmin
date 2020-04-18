const { StatusRuta } = require('../models');

const createStatusRuta = (data) => StatusRuta.create(data);
const getAllStatusRuta = () => StatusRuta.find({is_active: true});
const getOneStatusRuta = (id) => StatusRuta.findById({_id: id, is_active: true});
const deleteStatusRuta = (id) => StatusRuta.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateStatusRuta = (id, data) => StatusRuta.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getStatusRutaByNombre = (nombre) => StatusRuta.findOne({nombre, is_active: true});

module.exports = {
    createStatusRuta,
    getAllStatusRuta,
    getOneStatusRuta,
    deleteStatusRuta,
    updateStatusRuta,
    getStatusRutaByNombre
};