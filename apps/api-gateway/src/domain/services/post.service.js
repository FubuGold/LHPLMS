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

    async create(payload) {
        throw new Error('Function not implemented');
    }

    async getOne(id) {
        throw new Error('Function not implemented');
    }

    async getAll() {
        throw new Error('Function not implemented');
    }

    async update(payload) {
        throw new Error('Function not implemented');
    }

    async delete(id) {
        throw new Error('Function not implemented');
    }
}
