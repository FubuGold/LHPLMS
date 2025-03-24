import { Module } from '@nestjs/common';

import { AppController } from '../routes/app.controller';

import { AuthModule } from './auth.module';
import { AssignmentModule } from './assignment.module';
import { GroupModule } from './group.module';
import { PostModule } from './post.module';
import { QuestionBankModule } from './question-bank.module';
import { SubjectModule } from './subject.module';
import { SubmissionModule } from './submission.module';
import { UserModule } from './user.module';
import { ClassModule } from './class.module';

@Module({
    imports: [
        UserModule,
        AuthModule,
        ClassModule,
        AssignmentModule,
        GroupModule,
        PostModule,
        QuestionBankModule,
        SubjectModule,
        SubmissionModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
