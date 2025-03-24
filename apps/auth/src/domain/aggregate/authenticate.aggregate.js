import { Injectable, Dependencies, Bind, Inject } from '@nestjs/common';
import { UserCredentialRepo } from '@/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/infra/repos/userToken.repo';
import { UserToken } from '@/domain/entities/userToken.entity';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { USER_PATTERN } from '@app/lib/contracts/user/user.pattern';
import bcrypt from 'bcrypt';
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('API_GATEWAY', UserCredentialRepo, UserTokenRepo, JwtService)
export class Authenticator {
    constructor(userClient, UserCredentialRepo, UserTokenRepo, JwtService) {
        this.userClient = userClient;
        this.UserCredentialRepo = UserCredentialRepo;
        this.UserTokenRepo = UserTokenRepo;
        this.JwtService = JwtService;
    }

    async createNewAccessToken(user) {
        return await this.JwtService.signAsync(user, {
            secret: process.env['ACCESS_TOKEN'],
            expiresIn: '3h',
        });
    }
    async createNewRefreshToken(user) {
        return await this.JwtService.signAsync(user, {
            secret: process.env['REFRESH_TOKEN'],
            expiresIn: '7d',
        });
    }

    async getUserByUserCredential(username, password) {
        const user = await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_ONE, username),
        );

        if (!user) return undefined;

        const credential = await this.UserCredentialRepo.getByUserId(user.id);
        if (!credential) return undefined;

        const verified = await bcrypt.compare(password, credential.password);
        if (!verified) return undefined;

        return user;
    }
    async generateToken(user) {
        const access = await createNewAccessToken(user),
            refresh = await createNewRefreshToken(user);

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
    //Return decoded payload if verified, else return null
    async verifyToken(token, secret) {
        try {
            return await this.JwtService.verifyAsync(token, { secret: secret });
        } catch (error) {
            return null;
        }
    }

    async login(username, password) {
        const user = await this.getUserByUserCredential(username, password);
        if (!user) return null;

        return await this.generateToken(user);
    }

    async register(name, username, dob, avatar, password, confirmPassword) {
        if (password !== confirmPassword)
            throw new Error(`Passwords confirmation don't match`);

        const newUser = new User({
            name: name,
            username: username,
            dob: dob,
            avatar: avatar,
        });

        const user = await lastValueFrom(
            this.userClient.send(USER_PATTERN.CREATE, newUser),
        );

        if (!user) throw new Error(`User with ${username} already exists`);

        console.log(user);

        await this.registerNewUserCredential(user, password);

        return true;
    }

    async getUserByToken(accessToken, refreshToken) {
        //Verify accessToken first
        let user = await this.verifyToken(
            accessToken,
            this.process.env['ACCESS_TOKEN'],
        );

        if (user) return { user, accessToken };

        //If accessToken is invalid, check if refreshToken is existed in db

        const refresh = this.UserTokenRepo.getByToken(refreshToken);

        //If the token doesn't exist, it has been revoked
        if (!refresh) return null;

        //Now valid the token
        user = this.verifyToken(
            refreshToken,
            this.process.env['REFRESH_TOKEN'],
        );

        if (!user) return null;

        //If refreshToken is valid, make new accessToken

        const access = await this.createNewAccessToken(user);

        return { user, access };
    }
}
