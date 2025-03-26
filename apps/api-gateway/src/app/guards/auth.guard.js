import {
    Injectable,
    Dependencies,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
@Dependencies(AuthService, Reflector)
export class AuthGuard {
    constructor(AuthService, Reflector) {
        this.authService = AuthService;
        this.reflector = Reflector;
    }

    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }

        const req = context.switchToHttp().getRequest();
        const { accessToken } = req.cookies;

        const user = await this.authService.authenticate(accessToken);

        if (!user) throw new UnauthorizedException();
        req.user = user;
        return true;
    }
}
