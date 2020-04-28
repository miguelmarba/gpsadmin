const { createRuta, updateRuta, deleteRuta } = require('../../services/RutaService');

const createNewRuta = async (_, { data }) => {
    const ruta = await createRuta(data);
    return ruta;
};

const updateOneRuta = async (_, { id, data }) => {
    const ruta = await updateRuta(id, data);
    if(!ruta) throw new Error('Ruta not exists.');
    return ruta;
};

const deleteOneRuta = async (_, { id }) => {
    const ruta = await deleteRuta(id);
    if(!ruta) throw new Error('Ruta not exists');
    return 'Ruta deleted';
};


module.exports = {
    createNewRuta,
    //updateOneRuta,
    //deleteOneRuta,
};