import { Controller, Dependencies, Get, Post, Delete, Patch, Param, Bind, Body, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
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
    @Bind(Param('id'))
    async getOne(id) {
        return await this.userService.getOne(id);
    }

    @MessagePattern(USER_PATTERN.GET_ONE, Transport.TCP)
    @Bind(Payload())
    async getTCPOne(id) {
        return await this.userService.getOne(id);
    }

    @MessagePattern(USER_PATTERN.GET_BY_USERNAME, Transport.TCP)
    @Bind(Payload())
    async getByUserName(username) {
        return await this.userService.getByUserName(username);
    }

    @Get()
    async getAll() {
        return await this.userService.getAll();
    }

    @Post()
    @Bind(Body(), Res())
    async register(payload, res) {
        console.log('Post user received');
        const status = await this.userService.register(payload);
        console.log(status);
        return res.status(201).json({ message: 'Success' });
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
