import { NestFactory } from '@nestjs/core';
import { AssignmentModule } from './assignment.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AssignmentModule, {
    transport: Transport.TCP,
    options: { port: 3003 }
  });
  await app.listen();
}
bootstrap();
