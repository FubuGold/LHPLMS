import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/infra/repos/userToken.repo';
import { MessageService } from '@/infra/messages/message.service';
import { UserToken } from '@/domain/entities/userToken.entity';
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

  async getUserByUserCredential(username, password) {
    const user = await this.MessageService.message('userService.getByUsername', username);
    if (!user) return undefined;

    const credential = await this.UserCredentialRepo.getByUserId(user.id);
    if (!credential) return undefined;

    const verified = await bcrypt.compare(password, credential.password);
    if (!verified) return undefined;

    return user;
  }

  async generateToken(user) {
    const access = await JwtService.signAsync(user, process.env["ACCESS_TOKEN"], { expiresIn: "3h" }),
      refresh = await JwtService.signAsync(user, process.env["REFRESH_TOKEN"], { expiresIn: "7d" });

    const userToken = await UserTokenRepo.getByUserId(user.id);
    if (userToken) await UserTokenRepo.delete(userToken);

    await UserTokenRepo.save(new UserToken(user.id, refresh));

    return { access, refresh };
  }

  async login(username, password) {
    const user = await this.getUserByUserCredential(username, password);
    if (!user) return undefined;

    const { access, refresh } = await generateToken(user);

    return {
      access_token: access,
      refresh_token: refresh,
    };
  }
}
