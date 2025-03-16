import { Module } from '@nestjs/common';
import { PostController } from '../routes/post.controller';
import { PostService } from '../../domain/services/post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
