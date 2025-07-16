import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAutomationInput {
  @Field()
  name: string;

  @Field()
  triggerType: string;

  @Field()
  triggerValue: string;

  @Field()
  action: string;

  @Field(() => Int)
  deviceId: number;

  @Field(() => Int)
  userId: number;
}
