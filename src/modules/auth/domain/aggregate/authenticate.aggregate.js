import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/modules/auth/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/modules/auth/infra/repos/userToken.repo';
import { MessageService } from '@/modules/auth/infra/messages/message.service';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
@Dependencies(UserCredentialRepo, UserTokenRepo, MessageService, JwtService)
export class Authenticator {
  constructor(UserCredentialRepo, UserTokenRepo, MessageService, JwtService) {
    this.UserCredentialRepo = UserCredentialRepo;
    this.UserTokenRepo = UserTokenRepo;
    this.MessageService = MessageService;
    this.JwtService = JwtService;
  }

  async createUserCredential(userId, password) {
    const salt = await bcrypt.genSalt(10); // Generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password

    await this.UserCredentialRepo.save(
      new UserCredential(userId, hashedPassword, salt),
    );
  }

  async getUserCredential(userId) {
    return await this.UserCredentialRepo.get(userId);
  }

  async updateUserCredential(userId, password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await this.UserCredentialRepo.save(
      new UserCredential(userId, hashedPassword, salt),
    );
  }

  async deleteUserCredential(userId) {
    await this.UserCredentialRepo.delete(userId);
  }

  async getUserByUserCredential(userId, password) {
    const user = await this.MessageService.message('userService.get', userId);
    if (!user) return undefined;

    const credential = await this.UserCredentialRepo.getByUserId(userId);
    if (!credential) return undefined;

    const verified = await bcrypt.compare(password, credential.password);
    if (!verified) return undefined;

    return user;
  }

  async login(userId, password) {
    const user = await this.getUserByUserCredential(userId, password);
    if (!user) return undefined;

    return {
      access_token: await this.JwtService.signAsync(user),
    };
  }
}
