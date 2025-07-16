import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => Notification)
  createNotification(
    @Args('input') input: CreateNotificationInput,
  ): Promise<Notification> {
    return this.notificationService.create(input);
  }

  @Query(() => [Notification])
  findAllNotifications(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

 @Query(() => Notification)
findNotification(@Args('id') id: number): Promise<Notification> {
  return this.notificationService.findOne(id);
}


  @Mutation(() => Notification)
  updateNotification(
    @Args('input') input: UpdateNotificationInput,
  ): Promise<Notification> {
    return this.notificationService.update(input);
  }

  @Mutation(() => Boolean)
  removeNotification(@Args('id') id: number): Promise<boolean> {
    return this.notificationService.remove(id);
  }
}
