const { createUser, updateUser, deleteUser } = require('../../services/UserService');
const authenticate = require('../../utils/authenticate');

const createNewUser = async (_, { data }, { user }) => {
    const dataComplete = {
        ...data,
        user: `${user._id}`,
    };
    const usuario = await createUser(dataComplete);
    return usuario;
};

const updateOneUser = async (_, { id, data }) => {
    const user = await updateUser(id, data);
    if(!user) throw new Error('User not exists.');
    return user;
};

const deleteOneUser = async (_, { id }) => {
    const user = await deleteUser(id);
    if(!user) throw new Error('User not exists');
    return 'Author deleted';
};

const login = async (_, params) => {
    const token = await authenticate(params).catch( e => { throw e; });
    return {
        token : token,
        message: 'Login Successful'
    };
};

module.exports = {
    createNewUser,
    updateOneUser,
    deleteOneUser,
    login
};