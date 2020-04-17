const { createOperador, updateOperador, deleteOperador } = require('../../services/UserService');

const createNewOperador= async (_, { data }) => {
    const operador = await createOperador(data);
    return operador;
};

const updateOneOperador = async (_, { id, data }) => {
    const operador = await updateOperador(id, data);
    if(!operador) throw new Error('Operador not exists.');
    return operador;
};

const deleteOneOperador = async (_, { id }) => {
    const operador = await deleteOperador(id);
    if(!operador) throw new Error('Operador not exists');
    return 'Operador deleted';
};

module.exports = {
    createNewOperador,
    updateOneOperador,
    deleteOneOperador,
};