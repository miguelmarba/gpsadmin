const { createTrack, updateTrack, deleteTrack } = require('../../services/TrackingService');
const { getOneRuta } = require('../../services/RutaService');

const createNewTracking = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`
    };
    
    const tracking = await createTrack(dataComplete);

    const ruta = await getOneRuta(data.ruta);
    ruta.tracking.push(tracking._id);
    ruta.save();
    return tracking;
};

const updateOneTracking = async (_, { id, data }) => {
    const tracking = await updateTrack(id, data);
    if(!tracking) throw new Error('Tracking not exists.');
    return tracking;
};

const deleteOneTracking = async (_, { id }) => {
    const tracking = await deleteTrack(id);
    if(!tracking) throw new Error('Tracking not exists');
    return 'Ruta deleted';
};


module.exports = {
    createNewTracking,
    updateOneTracking,
    deleteOneTracking,
};