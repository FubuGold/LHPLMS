import { Test } from '@nestjs/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = module.get(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
