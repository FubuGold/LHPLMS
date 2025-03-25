import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassService {
  getHello() {
    return 'Hello World!';
  }
}
