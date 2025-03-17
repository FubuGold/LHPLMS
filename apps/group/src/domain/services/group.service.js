import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupService {
  getHello() {
    return 'Hello World!';
  }
}
