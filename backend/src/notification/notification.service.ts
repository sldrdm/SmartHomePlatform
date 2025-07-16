import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepo: Repository<Notification>,
  ) {}

  create(input: CreateNotificationInput): Promise<Notification> {
    const notification = this.notificationRepo.create(input);
    return this.notificationRepo.save(notification);
  }

  findAll(): Promise<Notification[]> {
    return this.notificationRepo.find();
  }

async findOne(id: number): Promise<Notification> {
  const notif = await this.notificationRepo.findOneBy({ id });
  if (!notif) {
    throw new Error('Bildirim bulunamadı.');
  }
  return notif;
}


  async update(input: UpdateNotificationInput): Promise<Notification> {
    const existing = await this.notificationRepo.findOneBy({ id: input.id });
    if (!existing) throw new NotFoundException('Bildirim bulunamadı');
    const updated = Object.assign(existing, input);
    return this.notificationRepo.save(updated);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.notificationRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
