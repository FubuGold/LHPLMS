import { Test } from '@nestjs/testing';
import { PrismaService } from './database/prisma.service';
import { userRepo } from './user.repo';

describe('User Repo unit test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [userRepo, PrismaService],
    }).compile();

    repo = module.get(userRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
  
  it('should have the required method', () => {
    expect(repo.getOne).toBeDefined();
    expect(repo.getAll).toBeDefined();
    expect(repo.update).toBeDefined();
    expect(repo.create).toBeDefined();
    expect(repo.delete).toBeDefined();
  })
});

describe('User Repo integration test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [userRepo, PrismaService],
    }).compile();

    repo = module.get(userRepo);
  });

  it('should have saved the user', () => {
    
  })
});