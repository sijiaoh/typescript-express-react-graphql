import {resolvers} from './resolvers';
import {buildSchemaSync} from 'type-graphql';

export const schema = buildSchemaSync({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolvers: Object.values(resolvers) as any,
});
