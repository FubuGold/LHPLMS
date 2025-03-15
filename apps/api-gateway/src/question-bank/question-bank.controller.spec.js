import { Test } from '@nestjs/testing';
import { QuestionBankController } from './question-bank.controller';

describe('QuestionBank Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [QuestionBankController],
    }).compile();

    controller = module.get(QuestionBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
