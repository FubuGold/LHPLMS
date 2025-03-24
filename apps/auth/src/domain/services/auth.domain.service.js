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

    async register(name, username, dob, avatar, password) {
        return await this.Authenticator.register(
            name,
            username,
            dob,
            avatar,
            password,
        );
    }

    async getUserByToken(accessToken, refreshToken) {
        return await this.Authenticator.getUserByToken(
            accessToken,
            refreshToken,
        );
    }
}
