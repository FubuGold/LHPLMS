import { Controller, Bind, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AUTH_PATTERN } from '@app/contracts/auth/auth.pattern'
import { AuthService } from './auth.service';

@Controller()
@Dependencies(AuthService)
export class AuthController {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  @MessagePattern(AUTH_PATTERN.LOGIN)
  @Bind(Payload())
  async login(payload) {
    return await this.AuthService.login(
      payload.username,
      payload.password,
    );
  }

  @MessagePattern(AUTH_PATTERN.REGISTER)
  @Bind(Payload())
  async register(payload) {
    return await this.AuthService.register(
      payload.name,
      payload.username,
      payload.dob,
      payload.avatar,
      payload.password,
      payload.password,
    );
  }

}