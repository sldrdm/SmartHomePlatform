import { Injectable } from '@nestjs/common';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  private devices: Device[] = [];

  create(name: string, type: string, userId: number): Device {
    const newDevice: Device = {
      id: this.devices.length + 1,
      name,
      type,
      userId,
    };
    this.devices.push(newDevice);
    return newDevice;
  }

  findAllByUser(userId: number): Device[] {
    return this.devices.filter((d) => d.userId === userId);
  }

  findAll(): Device[] {
    return this.devices;
  }

  delete(id: number, userId: number): boolean {
    const index = this.devices.findIndex((d) => d.id === id && d.userId === userId);
    if (index !== -1) {
      this.devices.splice(index, 1);
      return true;
    }
    return false;
  }
}
