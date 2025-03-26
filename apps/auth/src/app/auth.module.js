import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDomainService } from '../domain/services/auth.domain.service';
import { Authenticator } from '../domain/aggregate/authenticate.aggregate';
import { UserCredentialRepo } from '../infra/repos/userCredential.repo';
import { UserTokenRepo } from '../infra/repos/userToken.repo';
import { PrismaService } from '../infra/database/prisma.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'API_GATEWAY',
                transport: Transport.TCP,
                options: { port: 3001 },
                retryAttempts: 10,
                retryDelay: 1000,
            },
        ]),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
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
export class AuthModule {}
