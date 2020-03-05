import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserTokenService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('findUser: ', () => {
    it('to be defined', () => {
      expect(service.findUser).toBeDefined()
    })

    it('should return falsy', () => {
      expect(service.findUser('email', 'password')).toBeFalsy()
    })

    it('should return truthy', () => {
      expect(service.findUser('admin@admin.ru', '12345678')).toBeTruthy()
    })


  })

  describe('checkUser: ', () => {
    it('to be defined', () => {
      expect(service.checkUser).toBeDefined()
    })

    it('should return error object', () => {
      expect(service.checkUser('email', 'password')).toEqual({
        "statusCode": 401,
        "error": "Unauthorized"
      })
    })

    it('should return string.length equal 32', () => {
      expect(service.checkUser('admin@admin.ru', '12345678')).toHaveLength(32)
    })

  })


});