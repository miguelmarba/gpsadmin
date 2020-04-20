const { Cliente } = require('../models');

const createCliente = (data) => Cliente.create(data);
const getAllClientes = () => Cliente.find({is_active: true});
const getOneCliente = (id) => Cliente.findById({_id: id, is_active: true});
const deleteCliente = (id) => Cliente.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateCliente = (id, data) => Cliente.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});
const getClienteByEmail = (email) => Cliente.findOne({email, is_active: true});
const getClienteByNombre = (nombre) => Cliente.find({nombre: {$regex: nombre, $options: 'i'}, is_active: true});

module.exports = {
    getAllClientes,
    getOneCliente,
    deleteCliente,
    updateCliente,
    getClienteByEmail,
    createCliente,
    getClienteByNombre
};