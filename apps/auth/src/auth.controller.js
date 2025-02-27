import { Controller, Bind, Post, Param, Dependencies } from '@nestjs/common';
import { Authenticator } from './domain/aggregate/authenticate.aggregate';

@Controller('auth')
@Dependencies(Authenticator)
export class AuthController {
  @Post('/login')
  @Bind(Param())
  login(params) {

  }
}