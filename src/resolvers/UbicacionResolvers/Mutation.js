const { createUbicacion, updateUbicacion, deleteUbicacion } = require('../../services/UbicacionService');

const createNewUbicacion = async (_, { data }) => {
    const caja = await createUbicacion(data);
    return caja;
};

const updateOneUbicacion = async (_, { id, data }) => {
    const caja = await updateUbicacion(id, data);
    if(!caja) throw new Error('Ubicacion not exists.');
    return caja;
};

const deleteOneUbicacion = async (_, { id }) => {
    const caja = await deleteUbicacion(id);
    if(!caja) throw new Error('Ubicacion not exists');
    return 'Ubicacion deleted';
};


module.exports = {
    createNewUbicacion,
    updateOneUbicacion,
    deleteOneUbicacion,
};