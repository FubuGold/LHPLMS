import { Injectable, Dependencies } from '@nestjs/common';
import { Authenticator } from '@/modules/auth/domain/aggregate/authenticate.aggregate';
@Injectable()
@Dependencies(Authenticator)
export class AuthDomainService {
    constructor(Authenticator) {
        this.Authenticator = Authenticator;
    }

    login(username, password) {
        return this.Authenticator.login(username, password);
    }
}