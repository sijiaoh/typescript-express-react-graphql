import {resolvers} from './resolvers';
import {buildSchemaSync} from 'type-graphql';

export const buildSchema = (options: {emitSchemaFile?: string} = {}) => {
  return buildSchemaSync({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvers: Object.values(resolvers) as any,
    ...options,
  });
};
