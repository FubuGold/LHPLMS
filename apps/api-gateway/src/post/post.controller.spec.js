import { Test } from '@nestjs/testing';
import { PostController } from './post.controller';

describe('Post Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PostController],
    }).compile();

    controller = module.get(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
