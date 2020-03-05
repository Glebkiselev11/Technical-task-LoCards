import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../../../common/user/user.service';
import { UserTokenService } from '../../../common/user/token/user-token.service';


describe('UserController', () => {
  let app: TestingModule;
  let userController: UserController

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [UserService, UserTokenService],
      controllers: [UserController],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

});