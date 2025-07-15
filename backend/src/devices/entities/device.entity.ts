import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Device {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => Int)
  userId: number;
}

