import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { DevicesService } from './devices.service';
import { Device } from './entities/device.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CreateDeviceInput } from './dto/create-device.input'; // ✅ DTO içe aktarımı

@Resolver(() => Device)
@UseGuards(GqlAuthGuard)
export class DevicesResolver {
  constructor(private readonly devicesService: DevicesService) {}

  @Query(() => [Device], { name: 'devices' })
  findAll(@Context() context) {
    const user = context.req.user;
    return this.devicesService.findAllByUser(user.userId);
  }

  @Mutation(() => Device)
  createDevice(
    @Args('input') input: CreateDeviceInput,
    @Context() context,
  ) {
    const user = context.req.user;
    return this.devicesService.create(input.name, input.type, user.userId);
  }
}
