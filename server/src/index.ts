import 'reflect-metadata';

import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from './graphql/buildSchema';
import {resolvers} from './graphql/resolvers';

const app = express();
const server = new ApolloServer({
  schema: buildSchema(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: resolvers as any,
});

server.applyMiddleware({app});

app.listen(8080);
