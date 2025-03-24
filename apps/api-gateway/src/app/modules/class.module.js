import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClassService } from '../../domain/services/class.service';
import { ClassController } from '../routes/class.controller';
import { PostService } from '../../domain/services/post.service';
import { AssignmentService } from '../../domain/services/assignment.service';
import { SubmissionService } from '../../domain/services/submission.service';

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
        ClientsModule.register([
            {
                name: 'POST_SERVICE',
                transport: Transport.TCP,
                options: { port: 3005 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
        ClientsModule.register([
            {
                name: 'ASSIGNMENT_SERVICE',
                transport: Transport.TCP,
                options: { port: 3003 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
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
    controllers: [ClassController],
    providers: [
        ClassService,
        PostService,
        AssignmentService,
        SubmissionService,
    ],
})
export class ClassModule {}
