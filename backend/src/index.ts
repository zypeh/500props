import * as fastify from 'fastify';
import * as cors from 'cors';
import * as http from 'http';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlFastify, graphiqlFastify } from 'fastify-graphql';

const app = fastify();

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

app
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

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, function (err) {
  if (err) {
    throw err
  }
  console.log(`Listening on ${PORT}`)
})
