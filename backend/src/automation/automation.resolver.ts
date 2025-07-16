import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AutomationService } from './automation.service';
import { Automation } from './entities/automation.entity';
import { CreateAutomationInput } from './dto/create-automation.input';
import { UpdateAutomationInput } from './dto/update-automation.input';

@Resolver(() => Automation)
export class AutomationResolver {
  constructor(private readonly automationService: AutomationService) {}

  @Mutation(() => Automation)
  createAutomation(@Args('input') input: CreateAutomationInput) {
    return this.automationService.create(input);
  }

  @Query(() => [Automation])
  findAllAutomation() {
    return this.automationService.findAll();
  }

  @Query(() => Automation)
  findOneAutomation(@Args('id', { type: () => Int }) id: number) {
    return this.automationService.findOne(id);
  }

  @Mutation(() => Automation)
  updateAutomation(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateAutomationInput,
  ) {
    return this.automationService.update(id, input);
  }

  @Mutation(() => Boolean)
  removeAutomation(@Args('id', { type: () => Int }) id: number) {
    return this.automationService.remove(id);
  }
}
