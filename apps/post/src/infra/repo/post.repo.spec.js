import { Test } from '@nestjs/testing';
import { PostRepo } from './post.repo';

describe('PostService integration tests', () => {
    let service;

    beforeEach(() => {
        const module = Test.createTestingModule({
            providers: [PostRepo],
        }).compile();

        service = module.get(PostRepo);
    });

    it('should create a post', () => {});
    it('should create and update a post', () => {});
    it('should create a post with a valid ownerId and only return the matching post', () => {});
    it('should return all posts within a classroom', () => {});
    it('should create and delete a post', () => {});

    afterEach(() => {});
});
