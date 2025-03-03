import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/infra/repos/userToken.repo';
import { MessageService } from '@/infra/messages/message.service';
import { UserToken } from '@/domain/entities/userToken.entity';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import bcrypt from 'bcrypt';

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
    const user = await this.MessageService.message(
      'userService.getByUsername',
      username,
    );
    if (!user) return undefined;

    const credential = await this.UserCredentialRepo.getByUserId(user.id);
    if (!credential) return undefined;

    const verified = await bcrypt.compare(password, credential.password);
    if (!verified) return undefined;

    return user;
  }
  async generateToken(user) {
    const access = await this.JwtService.signAsync(user, {
        secret: process.env['ACCESS_TOKEN'],
        expiresIn: '3h',
      }),
      refresh = await this.JwtService.signAsync(user, {
        secret: process.env['REFRESH_TOKEN'],
        expiresIn: '7d',
      });

    const userToken = await this.UserTokenRepo.getByUserId(user.id);
    if (userToken) await this.UserTokenRepo.delete(userToken);

    await this.UserTokenRepo.save(
      new UserToken({
        userId: user.id,
        token: refresh,
      }),
    );

    return {
      accessToken: access,
      refreshToken: refresh,
    };
  }
  async registerNewUserCredential(user, password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await this.UserCredentialRepo.create({
      userId: user.id,
      password: hashedPassword,
      salt: salt,
    });
  }

  async login(username, password) {
    const user = await this.getUserByUserCredential(username, password);
    if (!user) return null;

    return await this.generateToken(user);
  }

  async register(name, username, dob, avatar, password) {
    const newUser = new User({
      name: name,
      username: username,
      dob: dob,
      avatar: avatar,
    });

    const user = await this.MessageService.message(
      'userService.createNewUser',
      newUser,
    );

    if (!user) throw new Error(`User with ${username} already exists`);

    await registerNewUserCredential(user, password);

    return true;
  }
}
