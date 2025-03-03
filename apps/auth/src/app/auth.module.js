import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDomainService } from '../domain/services/auth.domain.service';
import { Authenticator } from '../domain/aggregate/authenticate.aggregate';
import { UserCredentialRepo } from '../infra/repos/userCredential.repo';
import { UserTokenRepo } from '../infra/repos/userToken.repo';
import { MessageService } from '../infra/messages/message.service';
import { PrismaService } from '../infra/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [
    PrismaService,
    AuthService,
    AuthDomainService,
    MessageService,
    JwtService,
    Authenticator,
    UserCredentialRepo,
    UserTokenRepo,
  ],
  exports: [AuthService],
})
export class AuthModule {}
