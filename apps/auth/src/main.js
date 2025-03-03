import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AuthModule } from './app/auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: { port: 3002 }
  });
  await app.listen();
}
bootstrap();
