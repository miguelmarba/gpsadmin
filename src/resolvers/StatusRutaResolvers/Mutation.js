const { createStatusRuta, updateStatusRuta, deleteStatusRuta } = require('../../services/StatusRutaService');

const createNewStatusRuta = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`
    };
    const status_ruta = await createStatusRuta(dataComplete);
    return status_ruta;
};

const updateOneStatusRuta = async (_, { id, data }) => {
    const status_ruta = await updateStatusRuta(id, data);
    if(!status_ruta) throw new Error('Status Ruta not exists.');
    return status_ruta;
};

const deleteOneStatusRuta = async (_, { id }) => {
    const status_ruta = await deleteStatusRuta(id);
    if(!status_ruta) throw new Error('Status Ruta not exists');
    return 'Status Ruta deleted';
};


module.exports = {
    createNewStatusRuta,
    updateOneStatusRuta,
    deleteOneStatusRuta,
};