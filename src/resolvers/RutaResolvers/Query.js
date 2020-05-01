const { getAllRutas, getOneRuta, getRutaByFolio } = require('../../services/RutaService');

const getRutas = async () => {
    const rutas = await getAllRutas();
    console.log('Estoy en getRutas');
    console.log(rutas);
    return rutas;
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
    getRutas,
    getSingleRuta,
    //getSearchRuta
};