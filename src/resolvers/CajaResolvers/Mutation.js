const { createCaja, updateCaja, deleteCaja } = require('../../services/CajaService');

const createNewCaja = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const caja = await createCaja(dataComplete);
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