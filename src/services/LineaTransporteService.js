const { LineaTransporte } = require('../models');

const createLineaTransporte = (data) => LineaTransporte.create(data);
const getAllLineaTransportes = () => LineaTransporte.find({is_active: true});
const getOneLineaTransporte = (id) => LineaTransporte.findById({_id: id, is_active: true});
const deleteLineaTransporte = (id) => LineaTransporte.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateLineaTransporte = (id, data) => LineaTransporte.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getLineaTransporteByEmail = (email) => LineaTransporte.findOne({email, is_active: true});
const getLineaTransporteByNombre = (nombre) => LineaTransporte.find({nombre: {$regex: nombre, $options: 'i'}, is_active: true});

module.exports = {
    getAllLineaTransportes,
    getOneLineaTransporte,
    deleteLineaTransporte,
    updateLineaTransporte,
    getLineaTransporteByEmail,
    createLineaTransporte,
    getLineaTransporteByNombre
};