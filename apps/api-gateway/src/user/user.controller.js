import { Controller, Dependencies, Get, Post, Delete, Patch, Parm, Bind, Body } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
@Dependencies(UserService)
export class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    @Get(':id/setting')
    @Bind(Parm(id))
    async getSetting(id) {
        return await this.userService.getSetting(id);
    }

    @Get(':id/task')
    @Bind(Parm(id))
    async getTask(id) {
        return await this.userService.getTask(id);
    }

    @Get(':id')
    @Bind(Parm('id'))
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
    @Bind(Parm('id'))
    async delete(id) {
        await this.userService.delete(id);
    }
    
    @Patch(':id/setting')
    @Bind(Parm('id'), Body())
    async updateSetting(id,payload) {
        await this.userService.updateSetting(id,payload);
    }

    @Patch(':id')
    @Bind(Parm('id'), Body())
    async update(id,payload) {
        return await this.userService.update(id,payload);
    }
}
