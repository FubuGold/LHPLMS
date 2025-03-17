import { NestFactory } from '@nestjs/core';
import { SubjectModule } from './subject.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(SubjectModule, {
    transport: Transport.TCP,
    options: { port: 3007 }
  });
  await app.listen();
}
bootstrap();
