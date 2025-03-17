import { Controller, Dependencies, Get } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller()
@Dependencies(GroupService)
export class GroupController {
  constructor(groupService) {
    this.groupService = groupService;
  }

  @Get()
  getHello() {
    return this.groupService.getHello();
  }
}
