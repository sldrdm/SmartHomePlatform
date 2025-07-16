import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Automation } from './entities/automation.entity';
import { AutomationService } from './automation.service';
import { AutomationResolver } from './automation.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Automation])],
  providers: [AutomationService, AutomationResolver],
})
export class AutomationModule {}
