import { Dependencies, Injectable } from '@nestjs/common';
import { PostRepo } from '../../infra/repo/post.repo';

@Injectable()
@Dependencies(PostRepo)
export class PostService {
    constructor(postRepo) {
        this.postRepo = postRepo;
    }

    ping() {
        return 'Pong';
    }

    async getAll(payload) {
        return await this.postRepo.getAll(payload);
    }
    async getOne(payload) {
        return await this.postRepo.getOne(payload);
    }

    async create(payload) {
        return await this.postRepo.create(payload);
    }

    async update(payload) {
        return await this.postRepo.update(payload);
    }
    async delete(payload) {
        return await this.postRepo.delete(payload);
    }
}
