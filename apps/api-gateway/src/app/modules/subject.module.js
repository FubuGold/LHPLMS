import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SubjectService } from '../../domain/services/subject.service';
import { SubjectController } from '../routes/subject.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'SUBJECT_SERVICE',
                transport: Transport.TCP,
                options: { port: 3007 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
    ],
    providers: [SubjectService],
    controllers: [SubjectController],
})
export class SubjectModule {}
