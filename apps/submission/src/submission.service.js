import { Injectable } from '@nestjs/common';

@Injectable()
export class SubmissionService {
  getHello() {
    return 'Hello World!';
  }
}
