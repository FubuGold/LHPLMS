import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { SubmissionController } from './submission.controller';
import { SubmissionService } from '../domain/services/submission.service';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'API_GATEWAY',
            transport: Transport.TCP,
            options: { port: 3001 },
            retryAttempts: 10,
            retryDelay: 1000,
          }
        ])
      ],
    controllers: [SubmissionController],
    providers: [SubmissionService],
})
export class SubmissionModule {}
