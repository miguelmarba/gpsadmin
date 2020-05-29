const { createUbicacion, updateUbicacion, deleteUbicacion } = require('../../services/UbicacionService');

const createNewUbicacion = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const caja = await createUbicacion(dataComplete);
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