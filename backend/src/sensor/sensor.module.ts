import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sensor } from './entities/sensor.entity';
import { SensorService } from './sensor.service';
import { SensorResolver } from './sensor.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Sensor])],
  providers: [SensorService, SensorResolver],
})
export class SensorModule {}
