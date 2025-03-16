import { NestFactory } from '@nestjs/core';
import { AuthModule } from './assignment.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: { port: 3003 }
  });
  await app.listen();
}
bootstrap();
