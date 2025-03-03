import { Module } from '@nestjs/common';

import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AppController } from './app.controller';

import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [UserController, AuthController, AppController],
})
export class AppModule { }
