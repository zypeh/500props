'use strict'

const fastify = require('fastify')()
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlFastify, graphiqlFastify } = require('fastify-graphql')

const typeDefs = `
type Query {
    hello: String,
    hellos: [String]
}
`

const resolvers = {
  Query: {
    hello: () => 'world',
    hellos: () => ['hola', 'hello', 'aloha']
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

fastify
  .register(graphqlFastify, {
      prefix: '/gql',
      graphql: {
          schema
      }
  })
  .register(graphiqlFastify, {
      prefix: '/giql',
      graphiql: {
          endpointURL: '/gql'
      }
  })

fastify.listen(8000, function (err) {
  if (err) {
    throw err
  }
  console.log(`listening on ${fastify.server.address().port}`)
})
