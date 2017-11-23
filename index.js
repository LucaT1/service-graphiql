const { graphiqlExpress } = require('apollo-server-express')

module.exports = graphiqlExpress({ endpointURL: '/graphql' })
