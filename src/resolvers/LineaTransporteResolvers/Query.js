const { getAllLineaTransportes, getOneLineaTransporte, getLineaTransporteByNombre } = require('../../services/LineaTransporteService');

const getLineaTransportes = async () => {
    const lineas = await getAllLineaTransportes();
    return lineas;
};

const getSingleLineaTransporte = async (_, { id }) => {
    const linea = await getOneLineaTransporte(id);
    if(!linea) throw new Error('User not exists');
    return linea;
};

const getSearchLineaTransporte = async (_, { nombre }) => {
    const linea = await getLineaTransporteByNombre(nombre);
    if(!linea) throw new Error('No results');
    return linea;
};

module.exports = {
    getLineaTransportes,
    getSingleLineaTransporte,
    getSearchLineaTransporte
};