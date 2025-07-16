import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateSensorInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  type: string;               // "temperature", "light", "motion" …

  @Field(() => Float)
  @IsNumber()
  value: number;              // 26.5 vb.

  @Field()
  @IsString()
  unit: string;               // "°C", "Lux", "bool" …

  @Field()
  @IsString()
  location: string;           // "Salon", "Mutfak" …

  @Field(() => Int)
  @IsInt()
  deviceId: number;           // ✅ EKLENDİ

  @Field(() => Int)
  @IsInt()
  userId: number;
}
