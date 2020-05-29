const { createOperador, updateOperador, deleteOperador } = require('../../services/OperadorService');

const createNewOperador= async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const operador = await createOperador(dataComplete);
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