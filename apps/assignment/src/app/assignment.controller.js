import { Bind, Controller, Dependencies, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AssignmentService } from '../domain/services/assignment.service';
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
    return await this.service.create(payload);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.GET_ONE)
  @Bind(Payload())
  async getOne(id) {
    return await this.service.getOne(id);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.GET_ALL)
  @Bind(Payload())
  async getAll(queryParam) {
    return await this.service.getAll(queryParam);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.UPDATE)
  @Bind(Payload())
  async update(payload) {
    return await this.service.update(payload);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.DELETE)
  @Bind(Payload())
  async delete(id) {
    return await this.service.delete(id);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.ADD_QUESTION)
  @Bind(Payload())
  async addQuestion(payload) {
    return await this.service.addQuestion(payload);
  }

  @MessagePattern(ASSIGNMENT_PATTERN.DELETE_QUESTION)
  @Bind(Payload())
  async deleteQuestion(id) {
    return await this.service.deleteQuestion(id);
  }
}
