import {
    HttpStatus,
    HttpException,
    Controller,
    Dependencies,
    Post,
    Bind,
    Res,
    Body,
    Get,
} from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { Public } from '../decorators/public.decorator';

@Controller()
@Dependencies(AuthService)
export class AppController {
    constructor(authService) {
        this.authService = authService;
    }

    @Public()
    @Post('/login')
    @Bind(Body('username'), Body('password'), Res())
    async login(username, password, res) {
        const { accessToken, refreshToken } = await this.authService.login(
            username,
            password,
        );
        if (!accessToken || !refreshToken)
            throw new HttpException(
                'Authentication failed',
                HttpStatus.UNAUTHORIZED,
            );
        return res
            .setHeader('Authorization', `Bearer ${accessToken}`)
            .setHeader('X-Refresh-Token', `Bearer ${refreshToken}`)
            .status(201)
            .json({ message: 'Success' });
    }

    @Public()
    @Post('/register')
    @Bind(Body(), Res())
    async register(body, res) {
        const succeeded = await this.authService.register(body);
        // console.log(succeeded);

        if (!succeeded)
            throw new HttpException(
                'Registration failed',
                HttpStatus.BAD_REQUEST,
            );

        return res.status(201).json({ message: 'Success' });
    }

    @Public()
    @Post('/refresh')
    @Bind(Body())
    async refreshUserToken(body) {
        return await this.authService.refreshUserToken(body);
    }

    @Public()
    @Get()
    hello() {
        return 'Hello';
    }
}
