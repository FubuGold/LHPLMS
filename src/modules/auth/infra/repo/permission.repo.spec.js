import { Test } from '@nestjs/testing';
import { permissionRepo } from './permission.repo';

describe('Permission Repo unit test', () => {
  let repo;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [permissionRepo],
    }).compile();

    repo = module.get(permissionRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should have required methods', () => {
    expect(repo.createPermission).toBeDefined();
    expect(repo.updatePermission).toBeDefined();
    expect(repo.deletePermission).toBeDefined();
  });
});
