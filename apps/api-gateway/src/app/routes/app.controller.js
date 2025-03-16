import {
  HttpStatus,
  HttpException,
  Controller,
  Dependencies,
  Post,
  Bind,
  Res,
  Body,
} from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';

@Controller()
@Dependencies(AuthService)
export class AppController {
  constructor(authService) {
    this.authService = authService;
  }

  @Post('/login')
  @Bind(Body('username'), Body('password'), Res())
  async login(username, password, res) {
    const { accessToken, refreshToken } = await this.authService.login(
      username,
      password,
    );
    if (!accessToken || !refreshToken)
      throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);
    return res
      .setHeader('Authorization', `Bearer ${accessToken}`)
      .setHeader('X-Refresh-Token', `Bearer ${refreshToken}`)
      .status(201)
      .json({ message: 'Success' });
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
  async register(name, username, dob, avatar, password, confirmPassword, res) {
    const succeeded = await this.authService.register(
      name,
      username,
      dob,
      avatar,
      password,
      confirmPassword,
    );
    // console.log(succeeded);

    if (!succeeded)
      throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);

    return res.status(201).json({ message: 'Success' });
  }
}
