const { createRutaLastSeen, updateRutaLastSeen, deleteRutaLastSeen } = require('../../services/RutaLastSeenService');
const { getOneRuta } = require('../../services/RutaService');

const createNewRutaLastSeen = async (_, { data }, { user }) => {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ('0' + date_ob.getDate()).slice(-2);

    // current month
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();
    const fecha_string = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes + ':00';
    const dataComplete = {
        ...data,
        user: `${user._id}`,
        fecha_consulta: fecha_string
    };
    
    const ruta_last_seen = await createRutaLastSeen(dataComplete);
    
    const ruta = await getOneRuta(data.ruta);
    ruta.last_seen.push(ruta_last_seen._id);
    ruta.save();
    
    return ruta_last_seen;
};

const updateOneRutaLastSeen = async (_, { id, data }) => {
    const ruta_last_seen = await updateRutaLastSeen(id, data);
    if(!ruta_last_seen) throw new Error('Ruta not exists.');
    return ruta_last_seen;
};

const deleteOneRutaLastSeen = async (_, { id }) => {
    const ruta = await deleteRutaLastSeen(id);
    if(!ruta) throw new Error('Ruta not exists');
    return 'Ruta deleted';
};


module.exports = {
    createNewRutaLastSeen,
    updateOneRutaLastSeen,
    deleteOneRutaLastSeen,
};