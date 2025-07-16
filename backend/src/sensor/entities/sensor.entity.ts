import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Sensor {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  type: string;

  @Field(() => Float)
  @Column('float')
  value: number;

  @Field()
  @Column()
  unit: string;

  @Field()
  @Column()
  location: string;

  @Field(() => Int)
  @Column()
  userId: number;
  @Field(() => Int)
@Column()
deviceId: number;             // ✅ EKLENDİ


  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
