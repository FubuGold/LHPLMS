import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SubmissionController } from '../routes/submission.controller';
import { SubmissionService } from '../../domain/services/submission.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SUBMISSION_SERVICE',
                transport: Transport.TCP,
                options: { port: 3008 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
    ],
    controllers: [SubmissionController],
    providers: [SubmissionService],
})
export class SubmissionModule {}
