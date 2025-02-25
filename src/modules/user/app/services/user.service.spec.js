import { Test } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get(UserService);
    console.log(service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have essential function', () => {
    expect(service.getOne).toBeDefined();
    expect(service.getAll).toBeDefined();
    expect(service.register).toBeDefined();
    expect(service.login).toBeDefined();
    expect(service.delete).toBeDefined();
    expect(service.update).toBeDefined();
    expect(service.updateSetting).toBeDefined();
    expect(service.getSetting).toBeDefined();
    expect(service.createToken).toBeDefined();
  });

});
