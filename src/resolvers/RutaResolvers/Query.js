const { getAllRutas, getOneRuta, getRutaByFolio, getRutasByDates, getAllRutasByStatus } = require('../../services/RutaService');

const getRutas = async () => {
    const rutas = await getAllRutas();
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

const getSearchRutasByDates = async (_, { begin, end }) => {
    const rutas = await getRutasByDates(begin, end);
    return rutas;
};

const getSearchRutasByStatus = async (_, { status }) => {
    if(!status){
        return [];
    }
    const rutas = await getAllRutasByStatus(status);
    if(!rutas) throw new Error('No results');
    return rutas;
};

module.exports = {
    getRutas,
    getSingleRuta,
    getSearchRuta,
    getSearchRutasByDates,
    getSearchRutasByStatus
};