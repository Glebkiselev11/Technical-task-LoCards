import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../../../common/user/user.service';

@Controller('v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') pass: string,
  ) {
    return this.userService.checkUser(email, pass)
  }
}
