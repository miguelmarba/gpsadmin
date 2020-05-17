const { createRuta, updateRuta, deleteRuta } = require('../../services/RutaService');
//const { getOneUser } = require('../../services/UserService');

const createNewRuta = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`
    };
    
    const ruta = await createRuta(dataComplete);

    // const user = await getOneUser(data.user);
    // user.rutas.push(user);
    // user.save();
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
    updateOneRuta,
    deleteOneRuta,
};