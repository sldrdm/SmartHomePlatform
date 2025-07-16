import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import { ScheduleEntity } from '../../scheduler/entities/schedule.entity';
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

    @OneToMany(
    () => ScheduleEntity,
    (schedule: ScheduleEntity) => schedule.automation,
    { cascade: true }
  )

  @Field(() => Int)
  @Column()
  userId: number;
  schedules: ScheduleEntity[];
}
