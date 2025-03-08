import { Injectable, Inject, Bind } from '@nestjs/common';
import { USER_PATTERN } from '@app/contracts/user/user.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Bind(Inject('USER_SERVICE'))
export class UserService {
    constructor(userClient) {
        this.userClient = userClient;
    }

    async getOne(id) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_ONE, id)
        );
    }

    async getByUsername(username) {
        return await this.userClient.send(USER_PATTERN.GET_BY_USERNAME, username);
    }

    async getAll() {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_ALL, {})
        );
    }

    async getTask(id) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_TASK, id)
        );
    }

    async getSetting(id) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_SETTING, id)
        );
    }

    async register(payload) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.CREATE, payload)
        );
    }

    async delete(id) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.DELETE, id)
        );
    }

    async update(id, payload) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.UPDATE, { ...payload, id: id })
        );
    }

    async updateSetting(id, payload) {
        return await lastValueFrom(
            this.userClient.send(USER_PATTERN.UPDATE_SETTING, { ...payload, id: id })
        );
    }

}
