import "reflect-metadata";

import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {schema} from './graphql/schema';
import {resolvers} from './graphql/resolvers';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const server = new ApolloServer({schema, resolvers: resolvers as any});

server.applyMiddleware({app});

app.listen(8080);
