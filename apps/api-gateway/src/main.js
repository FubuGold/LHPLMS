import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules/app.module';
import { Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Document')
    .setDescription('Document for endpoints')
    .build();

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { port: 3003 },
  });
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);

  app.use(cookieParser());

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
