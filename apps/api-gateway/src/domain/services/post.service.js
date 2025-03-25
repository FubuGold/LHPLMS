import { Injectable, Dependencies } from '@nestjs/common';
import { POST_PATTERN } from '@app/lib/contracts/post/post.pattern';

@Injectable()
@Dependencies('POST_SERVICE')
export class PostService {
    constructor(postClient) {
        this.postClient = postClient;
    }

    async ping() {
        return await this.postClient
            .send(POST_PATTERN.PING, 'ping')
            .toPromise();
    }

    async create(payload = {}) {
        return await this.postClient
            .send(POST_PATTERN.CREATE, payload)
            .toPromise();
    }

    async getOne(payload = {}) {
        return await this.postClient
            .send(POST_PATTERN.GET_ONE, payload)
            .toPromise();
    }

    async getAll(payload = {}) {
        return await this.postClient
            .send(POST_PATTERN.GET_ALL, payload)
            .toPromise();
    }

    async update(payload = {}) {
        return await this.postClient
            .send(POST_PATTERN.UPDATE, payload)
            .toPromise();
    }

    async delete(payload = {}) {
        return await this.postClient
            .send(POST_PATTERN.DELETE, payload)
            .toPromise();
    }
}
