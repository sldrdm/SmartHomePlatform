import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SensorService } from './sensor.service';
import { Sensor } from './entities/sensor.entity';
import { CreateSensorInput } from './dto/create-sensor.input';
import { UpdateSensorInput } from './dto/update-sensor.input';

@Resolver(() => Sensor)
export class SensorResolver {
  constructor(private readonly sensorService: SensorService) {}

  @Mutation(() => Sensor)
  createSensor(
    @Args('input') input: CreateSensorInput,
  ): Promise<Sensor> {
    return this.sensorService.create(input);
  }

  @Query(() => [Sensor])
  findAllSensors(): Promise<Sensor[]> {
    return this.sensorService.findAll();
  }

  @Query(() => Sensor)
  findSensor(@Args('id', { type: () => Int }) id: number): Promise<Sensor> {
    return this.sensorService.findOne(id);
  }

  @Mutation(() => Sensor)
  updateSensor(
    @Args('input') input: UpdateSensorInput,
  ): Promise<Sensor> {
    return this.sensorService.update(input);
  }

  @Mutation(() => Boolean)
  removeSensor(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.sensorService.remove(id);
  }
}

