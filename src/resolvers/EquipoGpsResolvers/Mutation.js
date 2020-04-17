const { createEquipoGps, updateEquipoGps, deleteEquipoGps } = require('../../services/EquipoGpsService');

const createNewEquipoGps = async (_, { data }) => {
    const gps = await createEquipoGps(data);
    return gps;
};

const updateOneEquipoGps = async (_, { id, data }) => {
    const gps = await updateEquipoGps(id, data);
    if(!gps) throw new Error('Gps not exists.');
    return gps;
};

const deleteOneEquipoGps = async (_, { id }) => {
    const gps = await deleteEquipoGps(id);
    if(!gps) throw new Error('Gps not exists');
    return 'Gps deleted';
};


module.exports = {
    createNewEquipoGps,
    updateOneEquipoGps,
    deleteOneEquipoGps,
};