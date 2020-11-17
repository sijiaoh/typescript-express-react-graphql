import {resolvers} from './resolvers';
import {buildSchemaSync, NonEmptyArray} from 'type-graphql';

export const buildSchema = (options: {emitSchemaFile?: string} = {}) => {
  return buildSchemaSync({
    resolvers: (Object.values(resolvers) as unknown) as NonEmptyArray<Function>,
    ...options,
  });
};
