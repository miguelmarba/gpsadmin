const { createCliente, updateCliente, deleteCliente } = require('../../services/ClienteService');

const createNewCliente = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const cliente = await createCliente(dataComplete);
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