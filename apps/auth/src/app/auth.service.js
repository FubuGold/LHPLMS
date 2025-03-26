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

    async logout(refreshToken) {
        return await this.authDomainService.logout(refreshToken);
    }

    async register(payload) {
        return await this.authDomainService.register(payload);
    }

    async authenticate(accessToken) {
        return await this.authDomainService.getUserByToken(accessToken);
    }
}
