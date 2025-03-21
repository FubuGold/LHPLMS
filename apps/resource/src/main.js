import { NestFactory } from '@nestjs/core';
import { ResourceModule } from './subject.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(ResourceModule, {
        transport: Transport.TCP,
        options: { port: 3007 },
    });
    await app.listen();
}
bootstrap();
