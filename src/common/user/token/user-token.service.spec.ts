import { Test, TestingModule } from '@nestjs/testing';
import { UserTokenService } from './user-token.service';


describe('UserTokenService', () => {
  let service: UserTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTokenService],
    }).compile();

    service = module.get<UserTokenService>(UserTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateToken: ', () => {
    it('to be defined', () => {
      expect(service.generateToken).toBeDefined()
    })

    it('should return string.length equal 32', () => {
      expect(service.generateToken()).toHaveLength(32)
    })

  })

});