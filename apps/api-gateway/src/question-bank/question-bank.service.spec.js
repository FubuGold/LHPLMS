import { Test } from '@nestjs/testing';
import { QuestionBankService } from './question-bank.service';

describe('QuestionBankService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuestionBankService],
    }).compile();

    service = module.get(QuestionBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
