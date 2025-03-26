import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { PostModule } from './app/post.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(PostModule, {
        transport: Transport.TCP,
        options: { port: 3005 },
    });
    await app.listen();
}
bootstrap();
