import 'reflect-metadata';

import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {ResolversMap} from 'type-graphql';
import {buildSchema} from './graphql/buildSchema';
import {resolvers} from './graphql/resolvers';

const app = express();
const server = new ApolloServer({
  schema: buildSchema(),
  resolvers: resolvers as ResolversMap,
});

server.applyMiddleware({app});

app.listen(8080);
