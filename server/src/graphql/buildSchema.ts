import {resolvers} from './resolvers';
import {buildSchemaSync, NonEmptyArray, BuildSchemaOptions} from 'type-graphql';

export const buildSchema = (options: Partial<BuildSchemaOptions> = {}) => {
  return buildSchemaSync({
    resolvers: (Object.values(resolvers) as unknown) as NonEmptyArray<Function>,
    ...options,
  });
};
