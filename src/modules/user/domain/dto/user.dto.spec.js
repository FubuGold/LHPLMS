import { Test } from '@nestjs/testing';
import { UserDTO } from './user.dto';

describe('UserDTO', () => {
    let dto;
    beforeEach(async () => {
        dto = new UserDTO;
    });

    it('should have been defined', () => {
        expect(dto).toBeDefined();
    })

    it('should have all required properties', () => {

    })
})