import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDeviceInput } from './create-device.input';

@InputType()
export class UpdateDeviceInput extends PartialType(CreateDeviceInput) {
  @Field(() => Int)
  id: number;
}
