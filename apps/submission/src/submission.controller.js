import { Controller, Dependencies, Get } from '@nestjs/common';
import { SubmissionService } from './submission.service';

@Controller()
@Dependencies(SubmissionService)
export class SubmissionController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
