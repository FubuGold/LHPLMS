import { Dependencies, Inject, Injectable, Bind } from '@nestjs/common';
import { AuthDomainService } from '../domain/services/auth.domain.service';

@Injectable()
@Bind(Inject('API_GATEWAY'))
@Dependencies(AuthDomainService)
export class AuthService {
  constructor(userClient, AuthDomainService) {
    this.userClient = userClient;
    this.authDomainService = AuthDomainService;
  }

  async login(username, password) {
    return await this.userClient.send('user.getOne', 1); // Need to delete. Test only
    // return await this.authDomainService.login(username, password);
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
