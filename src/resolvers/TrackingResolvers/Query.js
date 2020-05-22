const { getAllTracking, getOneTracking, getTrackingByDates } = require('../../services/TrackingService');

const getTracking = async () => {
    const tracking = await getAllTracking();
    return tracking;
};

const getSingleTracking = async (_, { id }) => {
    const tracking = await getOneTracking(id);
    if(!tracking) throw new Error('Tracking not exists');
    return tracking;
};

const getSearchTrackingByDates = async (_, { begin, end }) => {
    const tracking = await getTrackingByDates(begin, end);
    return tracking;
};

module.exports = {
    getTracking,
    getSingleTracking,
    getSearchTrackingByDates
};