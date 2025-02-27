import { Injectable, Inject, Bind } from '@nestjs/common';
import { USER_PATTERN } from '@app/contracts/user'

@Injectable()
@Bind(Inject('USER_CLIENT'))
export class UserService {
    constructor(userClient) {
        this.userClient = userClient;
    }

    async getOne(id) {
        return await this.userClient.send(USER_PATTERN.GET_ONE,id);
    }

    async getAll() {
        return await this.userClient.send(USER_PATTERN.GET_ALL,{});
    }

    async register() {
        return await this.userClient.send(USER_PATTERN.REGISTER, {});
    }

    async delete(id) {
        await this.userClient.send(USER_PATTERN.DELETE,id);
    }

    async update(id) {
        await this.userClient.send(USER_PATTERN.UPDATE,{});
    }

    async saveSetting() {
        await this.userClient.send(USER_PATTERN.UPDATE_SETTING,{});
    }

    async getSetting(id) {
        return await this.userClient.send(USER_PATTERN.GET_SETTING,id);
    }

    async getTask(id) {
        return await this.userClient.send(USER_PATTERN.GET_TASK,id);
    }
}
