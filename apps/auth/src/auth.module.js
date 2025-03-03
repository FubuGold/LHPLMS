import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { AuthService } from './app/services/auth.service';
import { PrismaService } from './infra/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

import { Authenticator } from './domain/aggregate/authenticate.aggregate';

import { UserCredentialRepo } from '@/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/infra/repos/userToken.repo';
import { MessageService } from '@/infra/messages/message.service';


@Module({
  controllers: [AuthController],
  providers: [
    AuthService, PrismaService, JwtService,
    Authenticator,
    UserCredentialRepo, UserTokenRepo,
    MessageService
  ],
})
export class AuthModule {}
