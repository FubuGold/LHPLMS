import { Controller, Bind, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AUTH_PATTERN } from '@app/lib/contracts/auth/auth.pattern';
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
        return await this.AuthService.login(payload.username, payload.password);
    }

    @MessagePattern(AUTH_PATTERN.LOGOUT)
    @Bind(Payload())
    async logout({ refreshToken }) {
        return await this.AuthService.logout(refreshToken);
    }

    @MessagePattern(AUTH_PATTERN.REGISTER)
    @Bind(Payload())
    async register(payload) {
        return await this.AuthService.register(payload);
    }

    @MessagePattern(AUTH_PATTERN.AUTHENTICATE)
    @Bind(Payload())
    async authenticate({ accessToken }) {
        console.log(accessToken);
        return await this.AuthService.authenticate(accessToken);
    }
}
