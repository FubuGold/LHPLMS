import { Test } from '@nestjs/testing';
import { SubjectService } from './subject.service';

describe('SubjectService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SubjectService],
    }).compile();

    service = module.get(SubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
