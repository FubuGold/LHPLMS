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

    @Get(':unique_id/setting')
    @Bind(Param('unique_id'))
    async getSetting(unique_id) {
        return await this.userService.getSetting(unique_id);
    }

    @Get(':unique_id/task')
    @Bind(Param('unique_id'))
    async getTask(unique_id) {
        return await this.userService.getTask(unique_id);
    }

    @Get(':unique_id')
    @Bind(Param('unique_id'))
    async getOne(unique_id) {
        const status = await this.userService.getOne(unique_id);
        return status;
    }

    @MessagePattern(USER_PATTERN.GET_ONE, Transport.TCP)
    @Bind(Payload())
    async getTCPOne(unique_id) {
        return await this.userService.getOne(unique_id);
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

    @Delete(':unique_id')
    @Bind(Param('unique_id'))
    async delete(unique_id) {
        await this.userService.delete(unique_id);
    }

    @Patch(':unique_id/setting')
    @Bind(Param('unique_id'), Body())
    async updateSetting(unique_id, payload) {
        await this.userService.updateSetting(unique_id, payload);
    }

    @Patch(':unique_id')
    @Bind(Param('unique_id'), Body())
    async update(unique_id, payload) {
        return await this.userService.update(unique_id, payload);
    }
}
