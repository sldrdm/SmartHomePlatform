
import { Device } from './entities/device.entity';
import { NotFoundException, ForbiddenException, Injectable } from '@nestjs/common';
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

    remove(id: number, userId: number): boolean {
    const device = this.devices.find((d) => d.id === id);

    if (!device) {
      throw new NotFoundException('Cihaz bulunamadı');
    }

    if (device.userId !== userId) {
      throw new ForbiddenException('Bu cihazı silme yetkiniz yok');
    }

    this.devices = this.devices.filter((d) => d.id !== id);
    return true;
  }
  update(id: number, updateData: Partial<Device>, userId: number): Device {
  const deviceIndex = this.devices.findIndex(d => d.id === id && d.userId === userId);
  if (deviceIndex === -1) {
    throw new Error('Cihaz bulunamadı veya yetkiniz yok.');
  }

  this.devices[deviceIndex] = {
    ...this.devices[deviceIndex],
    ...updateData,
  };

  return this.devices[deviceIndex];
}

}


