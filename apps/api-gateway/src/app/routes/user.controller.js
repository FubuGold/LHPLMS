import {
  Controller,
  Dependencies,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Bind,
  Body,
} from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { PATTERN } from '@app/lib/contracts/user/user.pattern';
@Controller('user')
@Dependencies(UserService)
export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  @Get(':id/setting')
  @Bind(Param('id'))
  async getSetting(id) {
    return await this.userService.getSetting(id);
  }

  @Get(':id/tasks')
  @Bind(Param('id'))
  async getAllTask(id) {
    return await this.userService.getTask(id);
  }

  @Get(':id/tasks/:taskId')
  @Bind(Param('id'), Param('taskId'))
  async getOneTask(id, taskId) {
    return 'Test';
  }

  @Get(':id')
  @Bind(Param('id'))
  async getOne(id) {
    return await this.userService.getOne(id);
  }

  @MessagePattern(PATTERN.GET_ONE, Transport.TCP)
  @Bind(Payload())
  async getTCPOne(id) {
    return await this.userService.getOne(id);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Post()
  @Bind(Body())
  async register(payload) {
    return await this.userService.register(payload);
  }

  @MessagePattern(PATTERN.CREATE, Transport.TCP)
  @Bind(Payload())
  async registerTCP(payload) {
    return await this.userService.register(payload);
  }

  @Delete(':id')
  @Bind(Param('id'))
  async delete(id) {
    await this.userService.delete(id);
  }

  @Patch(':id/setting')
  @Bind(Param('id'), Body())
  async updateSetting(id, payload) {
    await this.userService.updateSetting(id, payload);
  }

  @Patch(':id')
  @Bind(Param('id'), Body())
  async update(id, payload) {
    return await this.userService.update(id, payload);
  }
}
