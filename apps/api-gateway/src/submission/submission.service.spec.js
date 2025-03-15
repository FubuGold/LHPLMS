import { Test } from '@nestjs/testing';
import { SubmissionService } from './submission.service';

describe('SubmissionService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SubmissionService],
    }).compile();

    service = module.get(SubmissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
