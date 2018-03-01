import * as fastify from 'fastify';
import * as http from 'http';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlFastify, graphiqlFastify } from 'fastify-graphql';
import * as helmet from 'fastify-helmet';

// Schema undone, do comment it out
// import db from './database';

import schema from './graphql';

const app = fastify();

app
  .register(helmet)
  .register(graphqlFastify, {
      prefix: '/gql',
      graphql: {
          schema,
          context: {
              // db
          }
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
