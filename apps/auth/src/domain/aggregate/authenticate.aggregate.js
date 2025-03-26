import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredentialRepo } from '@/infra/repos/userCredential.repo';
import { UserTokenRepo } from '@/infra/repos/userToken.repo';
import { UserToken } from '@/domain/entities/userToken.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { USER_PATTERN } from '@app/lib/contracts/user/user.pattern';
import bcrypt from 'bcrypt';

@Injectable()
@Dependencies(
    'API_GATEWAY',
    UserCredentialRepo,
    UserTokenRepo,
    JwtService,
    ConfigService,
)
export class Authenticator {
    constructor(
        userClient,
        UserCredentialRepo,
        UserTokenRepo,
        JwtService,
        ConfigService,
    ) {
        this.userClient = userClient;
        this.UserCredentialRepo = UserCredentialRepo;
        this.UserTokenRepo = UserTokenRepo;
        this.JwtService = JwtService;
        this.ConfigService = ConfigService;
    }

    async createNewAccessToken(user) {
        return await this.JwtService.signAsync(user.id, {
            secret: this.ConfigService.get('ACCESS_TOKEN'),
            expiresIn: '3h',
        });
    }
    async createNewRefreshToken(user) {
        return await this.JwtService.signAsync(user.id, {
            secret: this.ConfigService.get('REFRESH_TOKEN'),
            expiresIn: '7d',
        });
    }

    async getUserByUserCredential(username, password) {
        const user = await lastValueFrom(
            this.userClient.send(USER_PATTERN.GET_ONE, username),
        );

        if (!user) return undefined;

        //If user somehow doesn't have a credential then they are fake users
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

    async register(payload) {
        console.log(payload);

        if (payload.password !== payload.confirmPassword)
            throw new Error(`Passwords confirmation don't match`);

        const newUser = new User(payload);

        const user = await this.userClient
            .send(USER_PATTERN.CREATE, newUser)
            .toPromise();

        if (!user)
            throw new Error(`User with ${payload.username} already exists`);

        console.log(user);

        return await this.registerNewUserCredential(user, payload.password);
    }

    async refreshUserToken(refreshToken) {
        //Check if refreshToken is existed in db
        const refresh = this.UserTokenRepo.getByToken(refreshToken);

        //If the token doesn't exist, it has been revoked
        if (!refresh) return null;

        //Now valid the token
        const user = this.verifyToken(
            refreshToken,
            this.process.env['REFRESH_TOKEN'],
        );

        if (!user) return null;

        //If refreshToken is valid, make new accessToken
        const access = await this.createNewAccessToken(user);

        return access;
    }

    async getUserByToken(accessToken) {
        //Verify accessToken
        let user = await this.verifyToken(
            accessToken,
            this.ConfigService.get('ACCESS_TOKEN'),
        );
        return user;
    }
}
