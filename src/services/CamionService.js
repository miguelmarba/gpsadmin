const { Camion } = require('../models');

const createCamion = (data) => Camion.create(data);
const getAllCamiones = () => Camion.find({is_active: true});
const getOneCamion = (id) => Camion.findById({_id: id, is_active: true});
const deleteCamion = (id) => Camion.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateCamion = (id, data) => Camion.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getCamionByDescripcion = (descripcion) => Camion.find({descripcion: {$regex: descripcion, $options: 'i'}, is_active: true});

module.exports = {
    createCamion,
    getAllCamiones,
    getOneCamion,
    deleteCamion,
    updateCamion,
    getCamionByDescripcion
};