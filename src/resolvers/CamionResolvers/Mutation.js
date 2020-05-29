const { createCamion, updateCamion, deleteCamion } = require('../../services/CamionService');

const createNewCamion = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const camion = await createCamion(dataComplete);
    return camion;
};

const updateOneCamion = async (_, { id, data }) => {
    const camion = await updateCamion(id, data);
    if(!camion) throw new Error('Camion not exists.');
    return camion;
};

const deleteOneCamion = async (_, { id }) => {
    const camion = await deleteCamion(id);
    if(!camion) throw new Error('Camion not exists');
    return 'Camion deleted';
};


module.exports = {
    createNewCamion,
    updateOneCamion,
    deleteOneCamion,
};