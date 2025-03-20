import { Dependencies, Injectable } from '@nestjs/common';
import { PostRepo } from '../../infra/repo/post.repo';

@Injectable()
@Dependencies('API_GATEWAY', PostRepo)
export class PostService {
    constructor(client, postRepo) {
        this.client = client;
        this.postRepo = postRepo;
    }

    async getAll({ classId, ownerId }) {
        const filter = {};

        if (classId) filter.classId = classId;
        if (ownerId) filter.ownerId = ownerId;

        return await this.postRepo.getAll(filter);
    }
    getOne() {}
    create() {}
    update() {}
    delete() {}
}
