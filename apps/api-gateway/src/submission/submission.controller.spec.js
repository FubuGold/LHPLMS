import { Test } from '@nestjs/testing';
import { SubmissionController } from './submission.controller';

describe('Submission Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SubmissionController],
    }).compile();

    controller = module.get(SubmissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
