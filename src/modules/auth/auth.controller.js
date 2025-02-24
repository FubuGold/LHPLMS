import { Controller, Get, Bind } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  test() {}
}
