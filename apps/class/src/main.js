import { NestFactory } from '@nestjs/core';
import { ClassModule } from './app/class.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ClassModule, {
    transport: Transport.TCP,
    options: {
      port: 3010
    }
  });
  await app.listen();
}
bootstrap();
