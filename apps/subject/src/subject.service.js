import { Injectable } from '@nestjs/common';

@Injectable()
export class SubjectService {
  getHello() {
    return 'Hello World!';
  }
}
