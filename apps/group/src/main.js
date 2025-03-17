import { NestFactory } from '@nestjs/core';
import { GroupModule } from './group.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(GroupModule, {
    transport: Transport.TCP,
    options: { port: 3004 }
  });
  await app.listen();
}
bootstrap();
