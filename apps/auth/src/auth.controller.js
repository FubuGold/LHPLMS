import { Controller, Bind, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AUTH_PATTERN } from '@app/contracts/auth/auth.pattern'
import { Authenticator } from './domain/aggregate/authenticate.aggregate';

@Controller()
@Dependencies(Authenticator)
export class AuthController {
  @MessagePattern(AUTH_PATTERN.LOGIN)
  @Bind(Payload())
  login(payload) {

  }
}