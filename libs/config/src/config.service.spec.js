import { Test } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
