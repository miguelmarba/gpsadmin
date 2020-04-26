const { EquipoGps } = require('../models');

const createEquipoGps = (data) => EquipoGps.create(data);
const getAllEquipoGps = () => EquipoGps.find({is_active: true});
const getOneEquipoGps = (id) => EquipoGps.findById({_id: id, is_active: true});
const deleteEquipoGps = (id) => EquipoGps.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateEquipoGps = (id, data) => EquipoGps.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getEquipoGpsByDescripcion = (descripcion) => EquipoGps.find({descripcion: {$regex: descripcion, $options: 'i'}, is_active: true});

module.exports = {
    createEquipoGps,
    getAllEquipoGps,
    getOneEquipoGps,
    deleteEquipoGps,
    updateEquipoGps,
    getEquipoGpsByDescripcion
};