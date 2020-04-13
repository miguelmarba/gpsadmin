const UserResolver = require('./UserResolvers');

const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query: {
        ...UserResolver.Query
    },
    Mutation: {
        ...UserResolver.Mutation
    }
};