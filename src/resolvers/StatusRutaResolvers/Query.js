const { getAllStatusRuta, getOneStatusRuta, getStatusRutaByNombre } = require('../../services/StatusRutaService');

const getStatusRuta = async () => {
    const status_ruta = await getAllStatusRuta();
    return status_ruta;
};

const getSingleStatusRuta = async (_, { id }) => {
    const status_ruta = await getOneStatusRuta(id);
    if(!status_ruta) throw new Error('Status Ruta not exists');
    return status_ruta;
};

const getSearchStatusRuta = async (_, { nombre }) => {
    const status_ruta = await getStatusRutaByNombre(nombre);
    if(!status_ruta) throw new Error('No results');
    return status_ruta;
};

module.exports = {
    getStatusRuta,
    getSingleStatusRuta,
    getSearchStatusRuta
};