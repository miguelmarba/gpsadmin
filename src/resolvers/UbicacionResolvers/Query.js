const { getAllUbicaciones, getOneUbicacion, getUbicacionByNombre } = require('../../services/UbicacionService');

const getUbicaciones = async () => {
    const ubicaciones = await getAllUbicaciones();
    return ubicaciones;
};

const getSingleUbicacion = async (_, { id }) => {
    const ubicacion = await getOneUbicacion(id);
    if(!ubicacion) throw new Error('Ubicacion not exists');
    return ubicacion;
};

const getSearchUbicacion = async (_, { nombre }) => {
    const ubicaciones = await getUbicacionByNombre(nombre);
    return ubicaciones;
};

module.exports = {
    getUbicaciones,
    getSingleUbicacion,
    getSearchUbicacion
};