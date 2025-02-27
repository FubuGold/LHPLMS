import { Injectable, Inject, Bind } from '@nestjs/common';
import { AUTH_PATTERN } from '@app/contracts/user'

@Injectable()
@Bind(Inject('AUTH_SERVICE'))
export class AuthService {
    constructor(authClient) {
        this.authClient = authClient;
    }

    async login(payload) {
        await this.authClient.send(AUTH_PATTERN.LOGIN);
    }
}
