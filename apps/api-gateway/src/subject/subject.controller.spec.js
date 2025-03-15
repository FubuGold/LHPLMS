import { Test } from '@nestjs/testing';
import { SubjectController } from './subject.controller';

describe('Subject Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [SubjectController],
    }).compile();

    controller = module.get(SubjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
