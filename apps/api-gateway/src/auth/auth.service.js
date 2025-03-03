import { Injectable, Inject, Bind, Post, Body, Res } from '@nestjs/common';
import { AUTH_PATTERN } from '@app/contracts/auth/auth.pattern'
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
@Bind(Inject('AUTH_SERVICE'))
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

    async register(name, username, dob, avatar, password) {
        const res = await lastValueFrom(
            this.authClient.send(
                AUTH_PATTERN.REGISTER,
                {
                    name,
                    username,
                    dob,
                    avatar,
                    password
                }
            ));

        return res;
    }
}
