import { NestFactory } from '@nestjs/core';
import { AppModule } from './group.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: { port: 3003 }
  });
  await app.listen();
}
bootstrap();
