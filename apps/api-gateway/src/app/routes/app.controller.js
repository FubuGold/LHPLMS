import {
    HttpStatus,
    HttpException,
    Controller,
    Dependencies,
    Post,
    Bind,
    Res,
    Req,
    Body,
    Get,
} from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { Public } from '../decorators/public.decorator';
import { UserService } from '../../domain/services/user.service';

@Controller()
@Dependencies(AuthService, UserService)
export class AppController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @Public()
    @Post('/login')
    @Bind(Body(), Res())
    async login({ username, password }, res) {
        const { accessToken, refreshToken } = await this.authService.login({
            username,
            password,
        });
        if (!accessToken || !refreshToken)
            throw new HttpException(
                'Authentication failed',
                HttpStatus.UNAUTHORIZED,
            );
        return res
            .cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',

                maxAge: 15 * 60 * 1000,
            })
            .cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(201)
            .json({ message: 'Success' });
    }

    @Public()
    @Post('/register')
    @Bind(Body(), Res())
    async register(body, res) {
        try {
            await this.authService.register(body);
            return res.status(201).json({ message: 'Success' });
        } catch (error) {
            throw new HttpException(
                `Registration failed. Error: ${error}`,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Public()
    @Post('/logout')
    @Bind(Req(), Res())
    async logout(req, res) {
        try {
            await this.authService.logout({
                refreshToken: req.cookies.refreshToken,
            });
            return res
                .clearCookie('accessToken', req.cookies.accessToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                })
                .clearCookie('refreshToken', req.cookies.refreshToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'strict',
                })
                .status(201)
                .json({ message: 'Success' });
        } catch (error) {
            throw new HttpException(
                `Logout failed. ${error}`,
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Public()
    @Post('/refresh')
    @Bind(Req(), Res())
    async refreshUserToken(req, res) {
        const accessToken = await this.authService.refreshUserToken({
            refreshToken: req.cookies.refreshToken,
        });

        if (!accessToken)
            throw new HttpException(
                'Authentication failed',
                HttpStatus.UNAUTHORIZED,
            );

        return res
            .cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000,
            })
            .status(201)
            .json({ message: 'Success' });
    }

    @Public()
    @Get()
    hello() {
        return 'Hello';
    }

    @Get('/me')
    @Bind(Req())
    me(req) {
        console.log(req.userId);
        return this.userService.getOne(req.userId);
    }
}
