const { getAllUbicaciones, getOneUbicacion, getUbicacionByDescripcion } = require('../../services/UbicacionService');

const getUbicaciones = async () => {
    const ubicaciones = await getAllUbicaciones();
    console.log('Res ubicaciones:');
    console.log(ubicaciones);
    return ubicaciones;
};

const getSingleUbicacion = async (_, { id }) => {
    const ubicacion = await getOneUbicacion(id);
    if(!ubicacion) throw new Error('Ubicacion not exists');
    return ubicacion;
};

const getSearchUbicacion = async (_, { descripcion }) => {
    const ubicacion = await getUbicacionByDescripcion(descripcion);
    if(!ubicacion) throw new Error('No results');
    return ubicacion;
};

module.exports = {
    getUbicaciones,
    getSingleUbicacion,
    getSearchUbicacion
};