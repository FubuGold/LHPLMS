import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AppController } from './app.controller';

import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 }
      }
    ]),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 }
      }
    ])
  ],
  controllers: [UserController, AuthController, AppController],
  providers: [UserService, AuthService, AppService],
})
export class AppModule {}
