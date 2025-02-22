import { Test } from '@nestjs/testing';
import { resourceRepo } from './resource.repo';

describe('Resource Repo unit test', () => {
  let repo;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [resourceRepo],
    }).compile();

    repo = module.get(resourceRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should have required methods', () => {
    expect(repo.createResource).toBeDefined();
    expect(repo.updateResource).toBeDefined();
    expect(repo.deleteResource).toBeDefined();
  });
});
