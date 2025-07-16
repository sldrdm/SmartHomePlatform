import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateNotificationInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  message: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  type: string; // örn: "info", "success", "error"

  @Field()
  @IsBoolean()
  isRead: boolean;

  @Field()
  @IsInt()
  userId: number;
}
