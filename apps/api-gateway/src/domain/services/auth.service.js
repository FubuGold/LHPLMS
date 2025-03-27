import { Injectable, Dependencies } from '@nestjs/common';
import { AUTH_PATTERN } from '@app/lib/contracts/auth/auth.pattern';
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('AUTH_SERVICE')
export class AuthService {
    constructor(authClient) {
        this.authClient = authClient;
    }

    async authenticate(payload = {}) {
        return await this.authClient
            .send(AUTH_PATTERN.AUTHENTICATE, payload)
            .toPromise();
    }

    async login(payload = {}) {
        return await this.authClient
            .send(AUTH_PATTERN.LOGIN, payload)
            .toPromise();
    }

    async logout(payload = {}) {
        return await /*lastValueFrom(*/
        this.authClient.send(AUTH_PATTERN.LOGOUT, payload).toPromise(); //,
        // );
    }

    async register(payload = {}) {
        return await this.authClient
            .send(AUTH_PATTERN.REGISTER, payload)
            .toPromise();
    }
}
