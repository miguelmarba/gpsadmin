const { getAllClientes, getOneCliente, getClienteByNombre } = require('../../services/ClienteService');

const getClientes = async () => {
    const clientes = await getAllClientes();
    return clientes;
};

const getSingleCliente = async (_, { id }) => {
    const cliente = await getOneCliente(id);
    if(!cliente) throw new Error('User not exists');
    return cliente;
};

const getSearchCliente = async (_, { nombre }) => {
    const clientes = await getClienteByNombre(nombre);
    return clientes;
};

module.exports = {
    getClientes,
    getSingleCliente,
    getSearchCliente
};