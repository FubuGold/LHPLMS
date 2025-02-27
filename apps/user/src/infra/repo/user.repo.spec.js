import { Test } from '@nestjs/testing';
import { PrismaService } from '../database/prisma.service';
import { UserRepo } from './user.repo';
import { User } from '../../domain/entities/user.entity';

describe('User Repo unit test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [UserRepo, PrismaService],
    }).compile();

    repo = module.get(UserRepo);
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
      providers: [UserRepo, PrismaService],
    }).compile();

    repo = module.get(UserRepo);
    // Warning: disable this line after work
  });

  it('should create, get and delete the user', async () => {
    let dummyUser = new User({
      id: '814eca99-f5f4-41e0-bd48-1afd4d8fa971',
      name: 'Dummy User',
      username: 'dummyuser',
      dob: new Date('2000-12-21'),
      avatar: ''
    });
    await repo.create(dummyUser);
    
    let resUser = await repo.getOne(dummyUser.id);
    
    expect(resUser).toEqual(dummyUser);

    await repo.delete(resUser);

    expect(await repo.getOne(dummyUser.id)).toBeNull();
  })
});