const { createLineaTransporte, updateLineaTransporte, deleteLineaTransporte } = require('../../services/LineaTransporteService');

const createNewLineaTransporte = async (_, { data }) => {
    const linea = await createLineaTransporte(data);
    return linea;
};

const updateOneLineaTransporte = async (_, { id, data }) => {
    const linea = await updateLineaTransporte(id, data);
    if(!linea) throw new Error('Cliente not exists.');
    return linea;
};

const deleteOneLineaTransporte = async (_, { id }) => {
    const linea = await deleteLineaTransporte(id);
    if(!linea) throw new Error('Cliente not exists');
    return 'Author deleted';
};


module.exports = {
    createNewLineaTransporte,
    updateOneLineaTransporte,
    deleteOneLineaTransporte,
};