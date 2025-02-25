import { Test, TestingModule } from '@nestjs/testing';
import { UserRepo } from './user.repo';

describe('User Repo unit test', () => {
  let repo;

  beforeEach(async () => {
    repo = new UserRepo;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('should have the required method', () => {
    expect(repo.getUser).toBeDefined();
    expect(repo.updateUser).toBeDefined();
    expect(repo.createUser).toBeDefined();
    expect(repo.deleteUser).toBeDefined();
  })
});

describe('User Repo integration test', () => {

});