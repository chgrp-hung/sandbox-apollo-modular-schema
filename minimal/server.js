import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
// import compression from 'compression'; // optional middleware
// import { Engine } from 'apollo-engine'; //optional

import schema from './minimal';

const GRAPHQL_PORT = 3000;
// const ENGINE_API_KEY = 'API_KEY_HERE'; // TODO OPTIONAL

const graphQLServer = express();

// OPTTIONAL ENGINE
// const engine = new Engine({
//   engineConfig: {
//     apiKey: ENGINE_API_KEY
//   },
//   graphqlPort: GRAPHQL_PORT
// });
//
// engine.start();

// This must be the first middleware
// graphQLServer.use(engine.expressMiddleware()); //optional
// graphQLServer.use(compression()); //optional
graphQLServer.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    // This option turns on tracing
    tracing: true
  })
);

graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
