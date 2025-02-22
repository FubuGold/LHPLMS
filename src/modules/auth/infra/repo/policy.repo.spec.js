import { Test } from "@nestjs/testing";
import { policyRepo } from "./policy.repo";

describe("Policy Repo unit test", () => {
    let repo;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [policyRepo],
        }).compile();

        repo = module.get(policyRepo);
    });

    it("should be defined", () => {
        expect(repo).toBeDefined();
    });

    it("should have required methods", () => {
        expect(repo.createPolicy).toBeDefined();
        expect(repo.updatePolicy).toBeDefined();
        expect(repo.deletePolicy).toBeDefined();
    })
})