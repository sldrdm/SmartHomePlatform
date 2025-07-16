import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Automation } from './entities/automation.entity';
import { CreateAutomationInput } from './dto/create-automation.input';
import { UpdateAutomationInput } from './dto/update-automation.input';

@Injectable()
export class AutomationService {
  constructor(
    @InjectRepository(Automation)
    private automationRepo: Repository<Automation>,
  ) {}

  create(input: CreateAutomationInput): Promise<Automation> {
    const automation = this.automationRepo.create(input);
    return this.automationRepo.save(automation);
  }

  findAll(): Promise<Automation[]> {
    return this.automationRepo.find();
  }

 async findOne(id: number): Promise<Automation> {
  const automation = await this.automationRepo.findOneBy({ id });
  if (!automation) throw new Error('Otomasyon bulunamadı');
  return automation;
}


  async update(id: number, input: UpdateAutomationInput): Promise<Automation> {
    const automation = await this.automationRepo.findOneBy({ id });
    if (!automation) throw new Error('Otomasyon bulunamadı');
    Object.assign(automation, input);
    return this.automationRepo.save(automation);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.automationRepo.delete(id);
    return (result.affected??0) > 0;
  }
}
