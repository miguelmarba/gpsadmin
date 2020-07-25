const nodemailer = require('nodemailer');

const { getAllUsers, getOneUser, getUserByEmail } = require('../../services/UserService');

const getUsers = async () => {
    const users = await getAllUsers();
    return users;
};

const getSingleUser = async (_, { id }) => {
    const user = await getOneUser(id);
    if(!user) throw new Error('User not exists');
    return user;
};

const getSingleUserByEmail = async (_, { email }) => {
    const user = await getUserByEmail(email);
    if(!user) throw new Error('User not exists');
    return user;
};

const me = async (_, __, { user }) => {
    //const user = await getOneUser(user._id);
    return user;
};

const bienvenido = async () => {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '470cae4a62f024',
            pass: '99136de264fa39'
        }
    });
    const message = {
        from: 'miguel_marba@hotmail.com',
        to: 'miguelmarbaa@gmail.com',
        subject: 'Bienvenido a Tesigo',
        text: 'Have the most fun you can in a monitor. Get your Ruta today!'
    };
    
    transport.sendMail(message, function(err, info) {
        if(err){
            return 'Error al enviar el correo';
        } else {
            return 'Envio de correo exitoso';
        }
    });
};

module.exports = {
    getUsers,
    getSingleUser,
    me,
    bienvenido,
    getSingleUserByEmail
};