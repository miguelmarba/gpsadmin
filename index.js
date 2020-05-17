require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./src/resolvers');
const AuthDirective = require('./src/resolvers/Directives/AuthDirectives');
const verifyToken = require('./src/utils/verifyToken');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
});

const mongo = mongoose.connection;

mongo.on('error', (error) => console.log(error))
    .once('open', () => console.log('Connected to database.'));

const typeDefs = importSchema(__dirname + '/schema.graphql');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        AuthDirective
    }
});
const server = new GraphQLServer({
    schema, 
    context: async(contextParams) => ({
        ...contextParams,
        user: contextParams.request ? await verifyToken( contextParams.request ): {},
    }),
});

//server.start(()=> console.log('It works!'));

// Para definir un puerto, cuando el puerto 4000 esté ocupado
const port = process.env.PORT || 4000;
server.start(({ port }) => console.log(`It works! in port ${port}`));

module.exports = { schema };