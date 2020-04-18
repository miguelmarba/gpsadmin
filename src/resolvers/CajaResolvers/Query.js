const { getAllCajas, getOneCaja, getCajaByDescripcion } = require('../../services/CajaService');

const getCajas = async () => {
    const cajas = await getAllCajas();
    return cajas;
};

const getSingleCaja = async (_, { id }) => {
    const caja = await getOneCaja(id);
    if(!caja) throw new Error('Camion not exists');
    return caja;
};

const getSearchCaja = async (_, { descripcion }) => {
    const caja = await getCajaByDescripcion(descripcion);
    if(!caja) throw new Error('No results');
    return caja;
};

module.exports = {
    getCajas,
    getSingleCaja,
    getSearchCaja
};