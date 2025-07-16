import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  // Şimdilik boş; birazdan registerJob vb. ekleyeceğiz
}
