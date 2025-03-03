import { Controller, Dependencies, Get, Post, Delete, Patch, Param, Bind, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { USER_PATTERN } from '@app/contracts/user/user.pattern'
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

    @Get(':id/task')
    @Bind(Param('id'))
    async getTask(id) {
        return await this.userService.getTask(id);
    }

    @Get(':id')
    @MessagePattern(USER_PATTERN.GET_ONE) // Need to delete. Test only.
    @Bind(Param('id'))
    async getOne(id) {
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
