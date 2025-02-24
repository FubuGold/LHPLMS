import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/modules/auth/infra/repos/userCredential.repo';
import { userTokenRepo } from '@/modules/auth/infra/repos/userToken.repo';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';

@Injectable()
@Dependencies(UserCredentialRepo)
@Dependencies(userTokenRepo)
export class Authenticator {
  constructor(userCredentialRepo, userTokenRepo) {
    this.userCredentialRepo = userCredentialRepo;
  }
  async createUserCredential(userId, password) {
    await this.userCredentialRepo.save(new UserCredential(userId, password));
  }
  async getUserCredential(userId) {
    return await this.userCredentialRepo.get(userId);
  }
  async updateUserCredential(userId, password) {
    await this.userCredentialRepo.save(new UserCredential(userId, password));
  }
  async deleteUserCredential(userId) {
    await this.userCredentialRepo.delete(userId);
  }
  async verifyUserCredential(password) {
    credential = await this.UserCredentialRepo.getUserByPassword(password);

    if (!credential) return undefined;

    return;
  }
}
