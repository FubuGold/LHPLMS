import { Controller, Bind, Get, Post, Patch, Delete, Param, Request } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { USER_PATTERN } from '@app/contracts/user'

import { UserService } from './app/services/user.service';

@Controller()
export class UserController {
    constructor() {
        this.service = UserService;
    }

    @MessagePattern(USER_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(id) {
        return this.service.getOne(id);
    }

    @MessagePattern(USER_PATTERN.GET_ALL)
    async getAll() {
        return this.service.getAll();
    }

    @MessagePattern()
    @Bind(Payload())
    async getSetting(id) {
        return this.service.getSetting(id);
    }
    
    @MessagePattern('user.register')
    @Bind(Payload())
    async register() {
        this.service.register();
    }
    
    @MessagePattern('user.updateSetting')
    @Bind(Payload())
    async updateSetting() {
        this.service.updateSetting();
    }
    
    @MessagePattern('user.update')
    @Bind(Payload())
    async update() {
        this.service.update();
    }
    
    @MessagePattern('user.delete')
    @Bind(Payload())
    async delete(id) {
        this.service.delete(id);
    }

}
