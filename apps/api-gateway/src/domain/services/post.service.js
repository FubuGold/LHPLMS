import { Injectable } from '@nestjs/common';
import { POST_PATTERN } from '@app/lib/contracts/post/post.pattern'

@Injectable()
export class PostService {
    constructor() {

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
