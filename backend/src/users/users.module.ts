import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // AuthModule içinde kullanabilmek için
})
export class UsersModule {}
