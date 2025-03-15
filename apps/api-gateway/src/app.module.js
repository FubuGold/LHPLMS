import { forwardRef, Module } from '@nestjs/common';

import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AppController } from './app.controller';

import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AssignmentModule } from './assignment/assignment.module';
import { PostModule } from './post/post.module';
import { QuestionBankService } from './question-bank/question-bank.service';
import { QuestionBankModule } from './question-bank/question-bank.module';
import { SubjectModule } from './subject/subject.module';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [UserModule, AuthModule, AssignmentModule, PostModule, QuestionBankModule, SubjectModule, SubmissionModule],
  controllers: [UserController, AuthController, AppController],
  providers: [QuestionBankService],
})
export class AppModule { }
