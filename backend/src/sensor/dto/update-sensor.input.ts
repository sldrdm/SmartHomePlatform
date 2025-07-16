import { CreateSensorInput } from './create-sensor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateSensorInput extends PartialType(CreateSensorInput) {
  @Field(() => Int)
  @IsInt()
  id: number;
}

