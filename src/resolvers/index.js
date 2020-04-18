const UserResolver = require('./UserResolvers');
const ClienteResolver = require('./ClienteResolvers');
const OperadorResolver = require('./OperadorResolvers');
const LineaTransporteResolver = require('./LineaTransporteResolvers');
const EquipoGpsResolver = require('./EquipoGpsResolvers');
const CamionResolver = require('./CamionResolvers');
const CajaResolver = require('./CajaResolvers');

const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query: {
        ...UserResolver.Query,
        ...ClienteResolver.Query,
        ...OperadorResolver.Query,
        ...LineaTransporteResolver.Query,
        ...EquipoGpsResolver.Query,
        ...CamionResolver.Query,
        ...CajaResolver.Query
    },
    Mutation: {
        ...UserResolver.Mutation,
        ...ClienteResolver.Mutation,
        ...OperadorResolver.Mutation,
        ...LineaTransporteResolver.Mutation,
        ...EquipoGpsResolver.Mutation,
        ...CamionResolver.Mutation,
        ...CajaResolver.Mutation
    }
};