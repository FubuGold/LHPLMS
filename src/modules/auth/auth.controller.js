import { Controller, Get, Bind, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  test() {}
}
