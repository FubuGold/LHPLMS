import { Module } from '@nestjs/common';
import { PostController } from '../routes/post.controller';
import { PostService } from '../../domain/services/post.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'POST_SERVICE',
        transport: Transport.TCP,
        options: { port: 3005 },
        retryAttempts: 10,
        retryDelay: 1000,
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
