import 'reflect-metadata';

import path from 'path';
import {buildSchema} from '../src/graphql/buildSchema';

const projectRootPath = path.dirname(path.dirname(__dirname))
buildSchema({emitSchemaFile: `${projectRootPath}/client/generated/schema.gql`});
