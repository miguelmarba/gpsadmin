const { createCliente, updateCliente, deleteCliente } = require('../../services/ClienteService');

const createNewCliente = async (_, { data }) => {
    const cliente = await createCliente(data);
    return cliente;
};

const updateOneCliente = async (_, { id, data }) => {
    const cliente = await updateCliente(id, data);
    if(!cliente) throw new Error('Cliente not exists.');
    return cliente;
};

const deleteOneCliente = async (_, { id }) => {
    const cliente = await deleteCliente(id);
    if(!cliente) throw new Error('Cliente not exists');
    return 'Author deleted';
};


module.exports = {
    createNewCliente,
    updateOneCliente,
    deleteOneCliente,
};