import { Dependencies, Injectable } from '@nestjs/common';
import { PostRepo } from '../../infra/repo/post.repo';

@Injectable()
@Dependencies('API_GATEWAY', PostRepo)
export class PostService {
    constructor(client, postRepo) {
        this.client = client;
        this.postRepo = postRepo;
    }

    async getAll(payload) {
        const filter = {};

        //Filter all undefined and null values
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== null && value !== undefined) filter[key] = value;
        });

        return await this.postRepo.getAll(filter);
    }
    async getOne(payload) {
        return await this.postRepo.getOne(payload);
    }
    create() {}
    update() {}
    delete() {}
}
