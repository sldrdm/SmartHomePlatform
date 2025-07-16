import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchedulerService } from './scheduler.service';
import { SchedulerResolver } from './scheduler.resolver';
import { ScheduleEntity } from './entities/schedule.entity';


import { Automation } from '../automation/entities/automation.entity'; //  yolunu kendi yapına göre düzelt
// Örnek: entities klasörü içindeyse


@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity, Automation])],
  providers: [SchedulerService, SchedulerResolver],
  exports: [SchedulerService],
})
export class SchedulerModule {}
