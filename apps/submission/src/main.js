import { NestFactory } from '@nestjs/core';
import { SubmissionModule } from './submission.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SubmissionModule, {
    transport: Transport.TCP,
    options: { port: 3008 }
  });
  await app.listen();
}
bootstrap();
