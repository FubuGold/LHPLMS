import { Controller, Dependencies, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AssignmentService } from './assignment.service';
import { ASSIGNMENT_PATTERN } from '@app/lib/contracts/assignment/assignment.pattern'

@Controller()
@Dependencies(AssignmentService)
export class AssignmentController {
  constructor(service) {
    this.service = service;
  }

  @MessagePattern(ASSIGNMENT_PATTERN.CREATE)
  @Bind(Payload())
  async create(payload) {
    return this.service.getHello(payload);
  }
}
