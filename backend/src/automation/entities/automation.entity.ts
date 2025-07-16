import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Automation {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  triggerType: string;

  @Field()
  @Column()
  triggerValue: string;

  @Field()
  @Column()
  action: string;

  @Field(() => Int)
  @Column()
  deviceId: number;

  @Field(() => Int)
  @Column()
  userId: number;
}
