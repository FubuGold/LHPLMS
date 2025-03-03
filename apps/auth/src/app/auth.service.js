import { Dependencies, Injectable } from '@nestjs/common';
import { AuthDomainService } from '../domain/services/auth.domain.service';

@Injectable()
@Dependencies(AuthDomainService)
export class AuthService {
  constructor(AuthDomainService) {
    this.authDomainService = AuthDomainService;
  }

  async login(username, password) {
    return await this.authDomainService.login(username, password);
  }

  async register(name, username, dob, avatar, password) {
    return await this.authDomainService.register(
      name,
      username,
      dob,
      avatar,
      password,
    );
  }
}
