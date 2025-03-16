import { Injectable, Dependencies } from '@nestjs/common';
import { AUTH_PATTERN } from '@app/lib/contracts/auth/auth.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('AUTH_SERVICE')
export class AuthService {
    constructor(authClient) {
        this.authClient = authClient;
    }

    async login(username, password) {
        return await this.authClient.send(
            AUTH_PATTERN.LOGIN,
            {
                username,
                password,
            }
        );
    }

    async register(name, username, dob, avatar, password, confirmPassword) {
        const res = await lastValueFrom(
            this.authClient.send(
                AUTH_PATTERN.REGISTER,
                {
                    name,
                    username,
                    dob,
                    avatar,
                    password,
                    confirmPassword
                }
            ));

        return res;
    }
}
