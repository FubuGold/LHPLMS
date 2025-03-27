import { NestFactory } from '@nestjs/core';
import { QuestionBankModule } from './app/question-bank.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(QuestionBankModule, {
        transport: Transport.TCP,
        options: { port: 3006 },
    });
    await app.listen();
}
bootstrap();
