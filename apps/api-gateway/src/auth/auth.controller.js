import { HttpStatus, HttpException, Controller, Dependencies, Post, Bind, Res, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { AUTH_PATTERN } from '@app/contracts/auth/auth.pattern'

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
    // constructor(authService) {
    //     this.authService = authService;
    // }

    // @Post('/login')
    // @MessagePattern(AUTH_PATTERN.LOGIN)
    // @Bind(Body('username'), Body('password'), Res())
    // async login(username, password, res) {
    //     return await this.authService.login(username, password);
    //     // const { accessToken, refreshToken } = await this.authService.login(
    //     //     username,
    //     //     password,
    //     // );


    //     // if (!accessToken || !refreshToken)
    //     //     throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);

    //     // return res
    //     //     .setHeader('Authorization', `Bearer ${accessToken}`)
    //     //     .setHeader('X-Refresh-Token', `Bearer ${refreshToken}`)
    //     //     .status(201)
    //     //     .json({ message: 'Success' });
    // }

    // @Post('/register')
    // @MessagePattern(AUTH_PATTERN.REGISTER)
    // @Bind(
    //     Body('name'),
    //     Body('username'),
    //     Body('dob'),
    //     Body('avatar'),
    //     Body('password'),
    //     Body('confirmPassword'),
    //     Res(),
    // )
    // async register(name, username, dob, avatar, password, res) {
    //     const succeeded = await this.authService.register(
    //         name,
    //         username,
    //         dob,
    //         avatar,
    //         password,
    //         password,
    //     );
    //     // console.log(succeeded);

    //     if (!succeeded)
    //         throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);


    //     return res.status(201).json({ message: 'Success' });
    // }
}
