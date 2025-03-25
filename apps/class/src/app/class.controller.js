import { Bind, Controller, Dependencies } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ClassService } from '../domain/service/class.service';

@Controller()
@Dependencies(ClassService)
export class ClassController {
  constructor(appService) {
    this.appService = appService;
  }

  @MessagePattern(CLASS_PATTERN.CREATE)
  @Bind(Payload())
  async create(payload) { }

  @MessagePattern(CLASS_PATTERN.ADD_USER)
  @Bind(Payload())
  async addUser(payload) { }

  @MessagePattern(CLASS_PATTERN.UPDATE)
  @Bind(Payload())
  async update(payload) { }

  @MessagePattern(CLASS_PATTERN.DELETE)
  @Bind(Payload())
  async delete(payload) { }

  @MessagePattern(CLASS_PATTERN.DELETE_USER)
  @Bind(Payload())
  async deleteUser(payload) { }

  @MessagePattern(CLASS_PATTERN.GET_ALL)
  @Bind(Payload())
  async getAll(payload) { }

  @MessagePattern(CLASS_PATTERN.GET_ONE)
  async getOne() { }

  @MessagePattern(CLASS_PATTERN.GET_ALL_USER)
  @Bind(Payload())
  async getAllUsers(payload) { }
}
