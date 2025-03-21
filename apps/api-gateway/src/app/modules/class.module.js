import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClassService } from '../../domain/services/class.service';
import { ClassController } from '../routes/class.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLASS_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
        retryAttempts: 10,
        retryDelay: 1000,
      },
    ]),
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
