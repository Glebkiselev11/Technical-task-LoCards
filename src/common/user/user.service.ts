import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user';
import { UserTokenService } from './token/user-token.service';

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];

  constructor(
    private readonly userTokenService: UserTokenService,
  ) {}

  checkUser(email: string, pass: string) {
    const user = this.findUser(email, pass)
    if (user) {
      return this.userTokenService.generateToken()
    }
    throw new UnauthorizedException()
  }


  findUser(email: string, pass: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === pass)
    return user ? true : false
  } 
}
