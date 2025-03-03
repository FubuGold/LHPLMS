import { Injectable, Dependencies } from '@nestjs/common';
import { Authenticator } from '../aggregate/authenticate.aggregate';
@Injectable()
@Dependencies(Authenticator)
export class AuthDomainService {
  constructor(Authenticator) {
    this.Authenticator = Authenticator;
  }

  login(username, password) {
    return this.Authenticator.login(username, password);
  }

  register(name, username, dob, avatar, password) {
    return this.Authenticator.register(name, username, dob, avatar, password);
  }
}
