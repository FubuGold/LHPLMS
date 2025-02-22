import { userCredentialDto } from './userCredential.dto';

describe('User credential DTO unit test', () => {
  let dto;
  let repo;

  beforeEach(() => {
    repo = {}; //Stub repo
    dto = new userCredentialDto(repo);
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('should correctly assign the repository', () => {
    expect(dto.userCredentialDto).toBe(repo);
  });

  it('should have required method', () => {
    expect(dto.verifyUser).toBeDefined();
    expect(dto.updatePassword).toBeDefined();
    expect(dto.addUserCredential).toBeDefined();
    expect(dto.deleteUserCredential).toBeDefined();
  });
});
