import { Test } from "@nestjs/testing";
import { roleRepo } from "./role.repo";

describe("Role Repo unit test", () => {
    let repo;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [roleRepo],
        }).compile();

        repo = module.get(roleRepo);
    });

    it("should be defined", () => {
        expect(repo).toBeDefined();
    });

    it("should have required methods", () => {
        expect(repo.createRole).toBeDefined();
        expect(repo.updateRole).toBeDefined();
        expect(repo.deleteRole).toBeDefined();
    })
})