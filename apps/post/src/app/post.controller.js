import { Bind, Controller, Dependencies } from '@nestjs/common';
import { Payload, MessagePattern } from '@nestjs/microservices';
import { PostService } from '../domain/services/post.service';

import { POST_PATTERN } from '@app/lib/contracts/post/post.pattern';

@Controller()
@Dependencies(PostService)
export class PostController {
    constructor(postService) {
        this.postService = postService;
    }

    @MessagePattern(POST_PATTERN.PING)
    ping() {
        return this.postService.ping();
    }

    @MessagePattern(POST_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) {
        return await this.postService.getAll(payload);
    }

    @MessagePattern(POST_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(payload) {
        return await this.postService.getOne(payload);
    }

    @MessagePattern(POST_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) {
        return await this.postService.create(payload);
    }

    @MessagePattern(POST_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.postService.update(payload);
    }

    @MessagePattern(POST_PATTERN.DELETE)
    @Bind(Payload())
    async delete(payload) {
        return await this.postService.delete(payload);
    }
}
