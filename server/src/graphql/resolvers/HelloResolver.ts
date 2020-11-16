import {Query, Resolver} from 'type-graphql';
import {Hello} from '../types/Hello';

@Resolver()
export class HelloResolver {
  @Query(() => Hello)
  hello(): Hello {
    return {
      str: 'hello world',
      date: new Date(),
    };
  }
}
