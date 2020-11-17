import 'reflect-metadata';

import path from 'path';
import {buildSchema} from '../src/graphql/buildSchema';

buildSchema({
  emitSchemaFile: `${path.dirname(__dirname)}/generated/schema.gql`,
});
