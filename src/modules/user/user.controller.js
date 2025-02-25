import { Controller, Bind, Get, Post, Patch, Delete, Param, Request } from '@nestjs/common';
import { UserService } from './app/services/user.service';

@Controller('user')
export class UserController {
    constructor() {
        this.service = UserService;
    }

    @Get(':id')
    @Bind(Param('id'))
    async get(id) {
        return this.service.get(id);
    }

    @Get(':id/setting')
    @Bind(Param('id'))
    async getSetting(id) {
        return this.service.getSetting(id);
    }
    
    @Post()
    async register() {
        this.service.register();
    }
    
    @Patch(':id/setting/update')
    @Bind(Param('id'))
    async updateSetting() {
        this.service.updateSetting();
    }
    
    @Patch(':id/update')
    @Bind(Param('id'))
    async update() {
        this.service.update();
    }
    
    @Delete(':id')
    @Bind(Param('id'))
    async delete() {
        this.service.delete();
    }

}
