const { Tracking } = require('../models');

const createTrack = async (data) => {
    const track = Tracking.create(data);
    return track;
};
const getAllTracking = () => Tracking.find({
    is_active: true
}).populate('ruta').populate('user').populate('status_ruta');

const getOneTracking = (id) => Tracking.findById(
    { _id: id, 
        is_active: true
    }).populate('ruta').populate('user').populate('status_ruta');

const deleteTrack = (id) => Tracking.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    is_active: false
});
const updateTrack = (id, data) => Tracking.findByIdAndUpdate({
    _id: id, is_active: true
}, {
    ...data
}, {new: true});

const getTrackingByRuta = (ruta) => Tracking.findOne({ruta, is_active: true});

const getTrackingByDates = (begin, end) => Tracking.find({
    fecha_salida: {$gte:begin, $lte:end},
    is_active: true
}).populate('ruta').populate('user').populate('status_ruta');

module.exports = {
    createTrack,
    getAllTracking,
    getOneTracking,
    deleteTrack,
    updateTrack,
    getTrackingByRuta,
    getTrackingByDates
};