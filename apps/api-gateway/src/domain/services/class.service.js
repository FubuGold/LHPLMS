import { Injectable, Dependencies } from '@nestjs/common';
import { CLASS_PATTERN } from '@app/lib/contracts/class/class.pattern';

@Injectable()
@Dependencies('CLASS_SERVICE')
export class ClassService {
    constructor(classClient) {
        this.classClient = classClient;
    }

    async create(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.CREATE, payload)
            .toPromise();
    }

    async addUser(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.ADD_USER, payload)
            .toPromise();
    }

    async update(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.UPDATE, payload)
            .toPromise();
    }

    async delete(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.DELETE, payload)
            .toPromise();
    }

    async getOne(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.GET_ONE, payload)
            .toPromise();
    }

    async getAll(payload = {}) {
        return await this.classClient
            .send(CLASS_PATTERN.GET_ALL, payload)
            .toPromise();
    }
}
