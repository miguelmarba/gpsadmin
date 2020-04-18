const { createCaja, updateCaja, deleteCaja } = require('../../services/CajaService');

const createNewCaja = async (_, { data }) => {
    const caja = await createCaja(data);
    return caja;
};

const updateOneCaja = async (_, { id, data }) => {
    const caja = await updateCaja(id, data);
    if(!caja) throw new Error('Caja not exists.');
    return caja;
};

const deleteOneCaja = async (_, { id }) => {
    const caja = await deleteCaja(id);
    if(!caja) throw new Error('Caja not exists');
    return 'Caja deleted';
};


module.exports = {
    createNewCaja,
    updateOneCaja,
    deleteOneCaja,
};