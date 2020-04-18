const { getAllRuta, getOneRuta, getRutaByFolio } = require('../../services/RutaService');

const getRuta = async () => {
    const ruta = await getAllRuta();
    return ruta;
};

const getSingleRuta = async (_, { id }) => {
    const ruta = await getOneRuta(id);
    if(!ruta) throw new Error('Ruta not exists');
    return ruta;
};

const getSearchRuta = async (_, { folio }) => {
    const ruta = await getRutaByFolio(folio);
    if(!ruta) throw new Error('No results');
    return ruta;
};

module.exports = {
    getRuta,
    getSingleRuta,
    getSearchRuta
};