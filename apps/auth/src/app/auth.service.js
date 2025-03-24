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

    async register(name, username, dob, avatar, password, confirmPassword) {
        return await this.authDomainService.register(
            name,
            username,
            dob,
            avatar,
            password,
            confirmPassword,
        );
    }

    async getUserByToken(accessToken, refreshToken) {
        return await this.authDomainService.getUserByToken(
            accessToken,
            refreshToken,
        );
    }
}
