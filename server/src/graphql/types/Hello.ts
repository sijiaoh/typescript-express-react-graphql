import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class Hello {
  @Field()
  str!: string;
  @Field()
  date!: Date;
}
