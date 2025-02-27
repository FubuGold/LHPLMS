import { Test } from '@nestjs/testing';
import { PrismaService } from '../database/prisma.service';
import { UserCredentialRepo } from './userCredential.repo';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';
import * as bcrypt from 'bcrypt';

describe('UserCredentialRepo integration test', () => {
  let repo;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [UserCredentialRepo, PrismaService],
    }).compile();

    repo = module.get(UserCredentialRepo);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should save and get the user credential', async () => {
    const userId = '692e81fa-63fa-4991-a55f-0481b3d36ee2';
    const plainPassword = 'hahahahahaha';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    await repo.save(new UserCredential(userId, hashedPassword, salt));
    const response = await repo.getByUserId(userId);

    expect(await bcrypt.compare(plainPassword, response.password)).toBe(true);

    await repo.delete(response);
  });

  it('should not delete invalid user credential', async () => {
    await expect(
      repo.delete(
        new UserCredential(
          'invalid0-user-cred-enti-al81b3d36ee2',
          'hahahahah',
          'randomSalt',
        ),
      ),
    ).resolves.not.toThrow();
  });
});
