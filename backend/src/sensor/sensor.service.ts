import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { CreateSensorInput } from './dto/create-sensor.input';
import { UpdateSensorInput } from './dto/update-sensor.input';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private readonly sensorRepo: Repository<Sensor>,
  ) {}

  create(input: CreateSensorInput): Promise<Sensor> {
    const sensor = this.sensorRepo.create(input);
    return this.sensorRepo.save(sensor);
  }

  findAll(): Promise<Sensor[]> {
    return this.sensorRepo.find();
  }
async findOne(id: number): Promise<Sensor> {
  const sensor = await this.sensorRepo.findOneBy({ id });
  if (!sensor) {
    throw new Error('Sensor not found');
  }
  return sensor;
}


  async update(input: UpdateSensorInput): Promise<Sensor> {
    const sensor = await this.sensorRepo.preload(input);
    if (!sensor) throw new Error('Sensor not found');
    return this.sensorRepo.save(sensor);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.sensorRepo.delete(id);
    return (result.affected??0) > 0;
  }
}
