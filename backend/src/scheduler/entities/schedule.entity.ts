import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Automation } from '../../automation/entities/automation.entity';

@Entity({ name: 'schedules' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cronExpression: string;

  @Column({ default: 'UTC' })
  timezone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  nextRun: Date | null;

  @ManyToOne(
    () => Automation,
    (automation: Automation) => automation.schedules,
    { onDelete: 'CASCADE' }
  )
  automation: Automation;
}
