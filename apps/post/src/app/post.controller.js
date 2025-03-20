import { Bind, Controller, Dependencies } from '@nestjs/common';
import { Payload, MessagePattern } from '@nestjs/microservices';
import { PostService } from '../domain/services/post.service';

import { POST_PATTERN } from '@app/lib/contracts/post.pattern';

@Controller()
@Dependencies(PostService)
export class PostController {
    constructor(postService) {
        this.postService = postService;
    }

    @MessagePattern(POST_PATTERN.GET_ALL)
    @Bind(Payload())
    getAll(payload) {}

    @MessagePattern(POST_PATTERN.GET_ONE)
    @Bind(Payload())
    getOne(payload) {}

    @MessagePattern(POST_PATTERN.CREATE)
    @Bind(Payload())
    create(payload) {}

    @MessagePattern(POST_PATTERN.UPDATE)
    @Bind(Payload())
    update(payload) {}

    @MessagePattern(POST_PATTERN.DELETE)
    @Bind(Payload())
    delete(payload) {}
}
