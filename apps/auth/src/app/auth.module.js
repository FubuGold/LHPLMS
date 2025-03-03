import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDomainService } from '../domain/services/auth.domain.service';
import { Authenticator } from '../domain/aggregate/authenticate.aggregate';
import { UserCredentialRepo } from '../infra/repos/userCredential.repo';
import { UserTokenRepo } from '../infra/repos/userToken.repo';
import { PrismaService } from '../infra/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_GATEWAY',
        transport: Transport.TCP,
        options: { port: 3000 }
      }
    ])
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    AuthService,
    AuthDomainService,
    JwtService,
    Authenticator,
    UserCredentialRepo,
    UserTokenRepo,
  ],
  exports: [AuthService],
})
export class AuthModule { }
