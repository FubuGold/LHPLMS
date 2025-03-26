import { Injectable, Dependencies } from '@nestjs/common';
import { Authenticator } from '../aggregate/authenticate.aggregate';
@Injectable()
@Dependencies(Authenticator)
export class AuthDomainService {
    constructor(Authenticator) {
        this.Authenticator = Authenticator;
    }

    async login(username, password) {
        return await this.Authenticator.login(username, password);
    }

    async logout(refreshToken) {
        return await this.Authenticator.logout(refreshToken);
    }

    async register(payload) {
        return await this.Authenticator.register(payload);
    }

    async getUserByToken(accessToken) {
        return await this.Authenticator.getUserByToken(accessToken);
    }
}
