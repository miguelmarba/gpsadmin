const { getAllOperadores, getOneOperador, getOperadorByNombre } = require('../../services/OperadorService');

const getOperadores = async () => {
    const operadores = await getAllOperadores();
    return operadores;
};

const getSingleOperador = async (_, { id }) => {
    const operadores = await getOneOperador(id);
    if(!operadores) throw new Error('Operador not exists');
    return operadores;
};

const getSearchOperador = async (_, { nombre }) => {
    const operadores = await getOperadorByNombre(nombre);
    return operadores;
};

module.exports = {
    getOperadores,
    getSingleOperador,
    getSearchOperador
};