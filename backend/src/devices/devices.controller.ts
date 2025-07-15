import { Controller, Post, Get, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('devices')
@UseGuards(JwtAuthGuard)
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}




  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as any;
    return this.devicesService.findAllByUser(user.userId);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: Request) {
    const user = req.user as any;
    const success = this.devicesService.remove(+id, user.userId);
    return { success };
  }
  @Post()
create(@Body() body: { name: string; type: string }, @Req() req: Request) {
  const user = req.user as any;
  console.log('GELEN USER:', user); // 👈 log ekle

  return this.devicesService.create(body.name, body.type, user.userId);
}

}
