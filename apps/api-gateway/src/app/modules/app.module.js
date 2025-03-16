import { Module } from '@nestjs/common';

import { AssignmentController } from '../routes/assignment.controller';
import { PostController } from '../routes/post.controller';
import { QuestionBankController } from '../routes/question-bank.controller';
import { SubjectController } from '../routes/subject.controller';
import { SubmissionController } from '../routes/submission.controller';
import { UserController } from '../routes/user.controller';
import { AppController } from '../routes/app.controller';

import { UserModule } from './user.module';
import { AuthModule } from './auth.module';
import { AssignmentModule } from './assignment.module';
import { PostModule } from './post.module';
import { QuestionBankModule } from './question-bank.module';
import { SubjectModule } from './subject.module';
import { SubmissionModule } from './submission.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    AssignmentModule,
    PostModule,
    QuestionBankModule,
    SubjectModule,
    SubmissionModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
