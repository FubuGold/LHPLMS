import { Test } from '@nestjs/testing';
import { userCredentialRepo } from './userCredential.repo';

describe("User Credential Repo unit test", () => {
    let repo;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [userCredentialRepo]
        }).compile();

        repo = module.get(userCredentialRepo);
    });

    it("should be defined", () => {
        expect(repo).toBeDefined();
    });

    it("should have the required methods", () => {
        expect(repo.getUserCredential).toBeDefined();
        expect(repo.updateUserCredential).toBeDefined();
        expect(repo.addUserCredential).toBeDefined();
        expect(repo.deleteUserCredential).toBeDefined();
    });
});