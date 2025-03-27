import { NestFactory } from '@nestjs/core';
import { SubmissionModule } from './app/submission.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(SubmissionModule, {
        transport: Transport.TCP,
        options: { port: 3008 },
    });
    await app.listen();
}
bootstrap();
