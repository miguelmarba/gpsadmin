const { getAllRutaLastSeen, getAllRutaLastSeenByUser, getRutaLastSeenByDates } = require('../../services/RutaLastSeenService');

const getRutaLastSeen = async () => {
    const rutas = await getAllRutaLastSeen();
    return rutas;
};

const getRutasLastSeenByUser = async (_, __, { user }) => {
    let ruta = [];
    if(user.rol == 'ADMINISTRADOR'){
        ruta = await getAllRutaLastSeen();
    } else {
        ruta = await getAllRutaLastSeenByUser(user._id);
    }
    if(!ruta) throw new Error('Ruta not exists');
    return ruta;
};

const getRutasLastSeenByDates = async (_, { begin, end }) => {
    begin = begin + 'T00:00:00.000Z';
    end = end + 'T23:59:00.000Z';
    const rutas = await getRutaLastSeenByDates(begin, end);
    return rutas;
};

module.exports = {
    getRutaLastSeen,
    getRutasLastSeenByUser,
    getRutasLastSeenByDates
};