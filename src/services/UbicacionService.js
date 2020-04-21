const { Ubicacion } = require('../models');

const createUbicacion = (data) => Ubicacion.create(data);
const getAllUbicaciones = () => Ubicacion.find({is_active: true});
const getOneUbicacion = (id) => Ubicacion.findById({_id: id, is_active: true});
const deleteUbicacion = (id) => Ubicacion.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateUbicacion = (id, data) => Ubicacion.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getUbicacionByDescripcion = (descripcion) => Ubicacion.findOne({descripcion: {$regex: descripcion, $options: 'i'}, is_active: true});

module.exports = {
    createUbicacion,
    getAllUbicaciones,
    getOneUbicacion,
    deleteUbicacion,
    updateUbicacion,
    getUbicacionByDescripcion
};