import { Controller, Dependencies, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller()
@Dependencies(SubjectService)
export class SubjectController {
  constructor(subjectService) {
    this.subjectService = subjectService;
  }

  @Get()
  getHello() {
    return this.subjectService.getHello();
  }
}
