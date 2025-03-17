import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentService {
  getHello() {
    return 'Hello World!';
  }
}
