import { Test } from "@nestjs/testing";
import { PostService } from "./post.service";

describe('PostService integration tests', () => {
    let service;

    beforeEach(() => {
        const module = Test.createTestingModule({
            providers: [PostService]
        }).compile();

        service = module.get(PostService);
    });

    it('should create a post', () => { })
    it('should create and update a post', () => { })
    it('should create a post with a valid ownerId and only return the matching post', () => { })
    it('should return all posts within a classroom', () => { })
    it('should create and delete a post', () => { })

    afterEach(() => { });
})