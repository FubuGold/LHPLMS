import { Bind, Controller, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClassService } from '../domain/service/class.service';
import { CLASS_PATTERN } from '@app/lib/contracts/class/class.pattern';

@Controller()
@Dependencies(ClassService)
export class ClassController {
    constructor(classService) {
        this.classService = classService;
    }

    @MessagePattern(CLASS_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) {
        return await this.classService.create(payload);
    }

    @MessagePattern(CLASS_PATTERN.ADD_USER)
    @Bind(Payload())
    async addUser(payload) {
        return await this.classService.addUser(payload);
    }

    @MessagePattern(CLASS_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.classService.update(payload);
    }

    @MessagePattern(CLASS_PATTERN.DELETE)
    @Bind(Payload())
    async delete(payload) {
        this.classService.delete(payload);
    }

    @MessagePattern(CLASS_PATTERN.DELETE_USER)
    @Bind(Payload())
    async deleteUser(payload) {
        this.classService.deleteUser(payload);
    }

    @MessagePattern(CLASS_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) {
        const response = await this.classService.getAll(payload);
        console.log('GET ALL: ', response);
        return response;
    }

    @MessagePattern(CLASS_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(payload) {
        return await this.classService.getOne(payload);
    }

    @MessagePattern(CLASS_PATTERN.GET_ALL_USER)
    @Bind(Payload())
    async getAllUsers(payload) {
        return await this.classService.getAllUsers(payload);
    }
}
