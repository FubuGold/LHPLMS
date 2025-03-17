import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from '../domain/services/post.service';

@Module({
    imports: [],
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule {}
