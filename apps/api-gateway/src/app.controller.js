import {
  Controller,
  Dependencies,
  Bind,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Req,
  Res,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Post('/login')
  @Bind(Body('username'), Body('password'), Res())
  async login(username, password, res) {
    const { accessToken, refreshToken } = await this.appService.login(
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
  async register(name, username, dob, avatar, password, res) {
    const succeeded = await this.appService.register(
      name,
      username,
      dob,
      avatar,
      password,
      password,
    );

    if (!succeeded)
      throw new HttpException('Registration failed', HttpStatus.BAD_REQUEST);

    return res.status(201).json({ message: 'Success' });
  }
}
