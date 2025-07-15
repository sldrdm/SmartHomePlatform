import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { DevicesResolver } from './devices.resolver';

@Module({
  providers: [DevicesService, DevicesResolver],
  controllers: [DevicesController]
})
export class DevicesModule {}
