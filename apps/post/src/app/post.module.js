import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PostController } from './post.controller';
import { PostService } from '../domain/services/post.service';
import { PrismaClient } from '@prisma/client';
import { PostRepo } from '../infra/repo/post.repo';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'API_GATEWAY',
                transport: Transport.TCP,
                options: { port: 3001 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
    ],
    controllers: [PostController],
    providers: [PostService, PrismaClient, PostRepo],
})
export class PostModule {}
