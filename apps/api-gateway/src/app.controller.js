import { HttpStatus, HttpException, Controller, Dependencies, Post, Bind, Res, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { AUTH_PATTERN } from '@app/contracts/auth/auth.pattern'

@Controller()
@Dependencies(AuthService)
export class AppController {
    constructor(authService) {
        this.authService = authService;
    }

    @Post('/login')
    @Bind(Body('username'), Body('password'))
    async login(username, password) {
        return await this.authService.login(username, password);
        // const { accessToken, refreshToken } = await this.authService.login(
        //     username,
        //     password,
        // );


        // if (!accessToken || !refreshToken)
        //     throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);

        // return res
        //     .setHeader('Authorization', `Bearer ${accessToken}`)
        //     .setHeader('X-Refresh-Token', `Bearer ${refreshToken}`)
        //     .status(201)
        //     .json({ message: 'Success' });
    }

    @Post('/register')
    @Bind(
        Body('name'),
        Body('username'),
        Body('dob'),
        Body('avatar'),
        Body('password'),
        Body('confirmPassword'),
        Res(),
    )
    async register(name, username, dob, avatar, password, res) {
        const succeeded = await this.authService.register(
            name,
            username,
            dob,
            avatar,
            password,
            password,
        );
        // console.log(succeeded);

        if (!succeeded)
            throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);


        return res.status(201).json({ message: 'Success' });
    }
}
