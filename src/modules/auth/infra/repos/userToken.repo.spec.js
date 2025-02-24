import { Test } from '@nestjs/testing';
import { userTokenRepo } from './userToken.repo';
import { PrismaService } from '../database/prisma.service';
import { UserToken } from '@/modules/auth/domain/entities/userToken.entity';

describe('userToken repo integration test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [userTokenRepo, PrismaService],
    }).compile();

    repo = module.get(userTokenRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should save the token', async () => {
    await repo.save(
      new UserToken('692e81fa-63fa-4991-a55f-0481b3d36ee2', 'haha'),
    );
    const response = await repo.getByUserId(
      '692e81fa-63fa-4991-a55f-0481b3d36ee2',
    );
    console.log(response);
    await expect(response.token).toEqual('haha');

    await repo.delete(response);
  });
});
