import { Dependencies, Injectable } from '@nestjs/common';
import { AuthService } from './modules/auth/app/auth.service';

@Injectable()
@Dependencies(AuthService)
export class AppService {
  constructor(AuthService) {
    this.authService = AuthService;
  }
  async login(username, password) {
    return await this.authService.login(username, password);
  }
  async register(name, username, dob, avatar, password) {
    return await this.authService.register(
      name,
      username,
      dob,
      avatar,
      password,
    );
  }
}
