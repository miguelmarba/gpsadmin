const { getAllEquipoGps, getOneEquipoGps, getEquipoGpsByDescripcion } = require('../../services/EquipoGpsService');

const getEquipoGps = async () => {
    const gps = await getAllEquipoGps();
    return gps;
};

const getSingleEquipoGps = async (_, { id }) => {
    const gps = await getOneEquipoGps(id);
    if(!gps) throw new Error('User not exists');
    return gps;
};

const getSearchEquipoGps = async (_, { descripcion }) => {
    const gps = await getEquipoGpsByDescripcion(descripcion);
    if(!gps) throw new Error('No results');
    return gps;
};

module.exports = {
    getEquipoGps,
    getSingleEquipoGps,
    getSearchEquipoGps
};