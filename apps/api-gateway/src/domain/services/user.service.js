import { Injectable, Dependencies } from '@nestjs/common';
import { PATTERN } from '@app/lib/contracts/user/user.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('USER_SERVICE')
export class UserService {
    constructor(userClient) {
        this.userClient = userClient;
    }

    async getOne(id) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.GET_ONE, id)
        );
    }

    async getAll() {
        return await lastValueFrom(
            this.userClient.send(PATTERN.GET_ALL, {})
        );
    }

    async getTask(id) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.GET_TASK, id)
        );
    }

    async getSetting(id) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.GET_SETTING, id)
        );
    }

    async register(payload) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.CREATE, payload)
        );
    }

    async delete(id) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.DELETE, id)
        );
    }

    async update(id, payload) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.UPDATE, { ...payload, userId: id })
        );
    }

    async updateSetting(id, payload) {
        return await lastValueFrom(
            this.userClient.send(PATTERN.UPDATE_SETTING, { ...payload, userId: id })
        );
    }

}
