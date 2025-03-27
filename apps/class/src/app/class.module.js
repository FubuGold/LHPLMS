import { Module } from '@nestjs/common';
import { ClassService } from '../domain/service/class.service';
import { PrismaClient } from '@prisma/client';
import { ClassController } from './class.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClassRepo } from '../infra/repos/class.repo';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_GATEWAY',
        transport: Transport.TCP,
        options: { port: 3001 },
        retryAttempts: 10,
        retryDelay: 1000,
      },
    ]),
  ],
  controllers: [ClassController],
  providers: [ClassService, PrismaClient, ClassRepo],
})
export class ClassModule { }
