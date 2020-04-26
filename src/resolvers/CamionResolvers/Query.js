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
    const camiones = await getCamionByDescripcion(descripcion);
    return camiones;
};

module.exports = {
    getCamiones,
    getSingleCamion,
    getSearchCamion
};