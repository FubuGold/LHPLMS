import { Controller, Dependencies, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller()
@Dependencies(PostService)
export class PostController {
  constructor(postService) {
    this.postService = postService;
  }

  @Get()
  getHello() {
    return this.postService.getHello();
  }
}
