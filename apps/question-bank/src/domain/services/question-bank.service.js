import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionBankService {
  getHello() {
    return 'Hello World!';
  }
}
