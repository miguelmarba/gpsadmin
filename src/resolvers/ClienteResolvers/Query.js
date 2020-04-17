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
    const cliente = await getClienteByNombre(nombre);
    if(!cliente) throw new Error('No results');
    return cliente;
};

module.exports = {
    getClientes,
    getSingleCliente,
    getSearchCliente
};