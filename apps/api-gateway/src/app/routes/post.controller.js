import { Bind, Controller, Dependencies } from '@nestjs/common';
import { PostService } from '../../domain/services/post.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { POST_PATTERN } from '@app/lib/contracts/post/post.pattern';

@Controller('posts')
@Dependencies(PostService)
export class PostController {
    constructor(postService) {
        this.postService = postService;
    }

    @MessagePattern(POST_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) {
        return await this.postService.create(payload);
    }

    @MessagePattern(POST_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(id) {
        return await this.postService.getOne(id);
    }

    @MessagePattern(POST_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) {
        return await this.postService.getAll(payload);
    }

    @MessagePattern(POST_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.postService.update({ ...payload });
    }

    @MessagePattern(POST_PATTERN.DELETE)
    @Bind(Payload())
    async delete(id) {
        return await this.postService.delete(id);
    }
}
