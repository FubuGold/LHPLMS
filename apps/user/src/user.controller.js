import { Controller, Bind, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { USER_PATTERN } from '@app/contracts/user/user.pattern'

import { UserService } from './app/services/user.service';

@Controller()
@Dependencies(UserService)
export class UserController {
    constructor(userService) {
        this.service = userService;
    }

    @MessagePattern(USER_PATTERN.GET_SETTING)
    @Bind(Payload())
    async getSetting(id) {
        return await this.service.getSetting(id);
    }

    @MessagePattern(USER_PATTERN.GET_BY_USERNAME)
    @Bind(Payload())
    async getByUserName(username) {
        return await this.service.getByUsername(username);
    }

    @MessagePattern(USER_PATTERN.GET_TASK)
    @Bind(Payload())
    async getTask(id) {
        return await this.service.getTask(id);
    }

    @MessagePattern(USER_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(id) {
        console.log("UserService got getOne")
        return await this.service.getOne(id);
    }

    @MessagePattern(USER_PATTERN.GET_ALL)
    async getAll() {
        return await this.service.getAll();
    }

    @MessagePattern(USER_PATTERN.CREATE)
    @Bind(Payload())
    async register(payload) {
        console.log('User controller received register');
        return await this.service.register(payload);
    }

    @MessagePattern(USER_PATTERN.UPDATE_SETTING)
    @Bind(Payload())
    async updateSetting(payload) {
        return await this.service.updateSetting(payload);
    }

    @MessagePattern(USER_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.service.update(payload);
    }

    @MessagePattern(USER_PATTERN.DELETE)
    @Bind(Payload())
    async delete(id) {
        return await this.service.delete(id);
    }

}
