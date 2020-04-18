const { getAllCamiones, getOneCamion, getCamionByDescripcion } = require('../../services/CamionService');

const getCamiones = async () => {
    const camiones = await getAllCamiones();
    return camiones;
};

const getSingleCamion = async (_, { id }) => {
    const camion = await getOneCamion(id);
    if(!camion) throw new Error('Camion not exists');
    return camion;
};

const getSearchCamion = async (_, { descripcion }) => {
    const camion = await getCamionByDescripcion(descripcion);
    if(!camion) throw new Error('No results');
    return camion;
};

module.exports = {
    getCamiones,
    getSingleCamion,
    getSearchCamion
};