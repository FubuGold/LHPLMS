import { Test } from '@nestjs/testing';
import { PrismaService } from '../database/prisma.service';
import { UserTokenRepo } from './userToken.repo';
import { UserToken } from '@/modules/auth/domain/entities/userToken.entity';

describe('userToken repo integration test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [UserTokenRepo, PrismaService],
    }).compile();

    repo = module.get(UserTokenRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should save, get, and delete the token', async () => {
    await repo.save(
      new UserToken({
        userId: '692e81fa-63fa-4991-a55f-0481b3d36ee2',
        token: 'haha',
      }),
    );
    const response = await repo.getByUserId(
      '692e81fa-63fa-4991-a55f-0481b3d36ee2',
    );
    await expect(response.token).toEqual('haha');

    await repo.delete(response);
  });

  it('should not delete invalid user token', async () => {
    await expect(
      repo.delete(
        new UserToken({
          userId: 'invalid0-user-cred-enti-al81b3d36ee2',
          token: 'hahahahah',
        }),
      ),
    ).resolves.not.toThrow();
  });
});
