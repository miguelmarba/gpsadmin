const UserResolver = require('./UserResolvers');
const ClienteResolver = require('./ClienteResolvers');

const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query: {
        ...UserResolver.Query,
        ...ClienteResolver.Query
        
    },
    Mutation: {
        ...UserResolver.Mutation,
        ...ClienteResolver.Mutation
    }
};