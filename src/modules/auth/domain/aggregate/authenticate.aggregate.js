import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/modules/auth/infra/repos/userCredential.repo';
import { userTokenRepo } from '@/modules/auth/infra/repos/userToken.repo';
import { messageService } from '@/modules/auth/infra/messages/message.service';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';

@Injectable()
@Dependencies(UserCredentialRepo)
@Dependencies(userTokenRepo)
@Dependencies(messageService)
export class Authenticator {
  constructor(userCredentialRepo, userTokenRepo) {
    this.userCredentialRepo = userCredentialRepo;
    this.userTokenRepo = userTokenRepo;
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
  async verifyUserCredential(userId, password) {
    user = await this.messageService.message('getUserById', userId);
    if (!user) return undefined;

    credential = await this.UserCredentialRepo.getUserByPassword(password);
    if (!credential) return undefined;
  }
}
