const { Operador } = require('../models');

const createOperador = (data) => Operador.create(data);
const getAllOperadores = () => Operador.find({is_active: true});
const getOneOperador = (id) => Operador.findById({_id: id, is_active: true});
const deleteOperador = (id) => Operador.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateOperador = (id, data) => Operador.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getOperadorByEmail = (email) => Operador.findOne({email, is_active: true});
const getOperadorByNombre = (nombre) => Operador.findOne({nombre, is_active: true});

module.exports = {
    getAllOperadores,
    getOneOperador,
    deleteOperador,
    updateOperador,
    getOperadorByEmail,
    createOperador,
    getOperadorByNombre
};