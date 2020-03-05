import { Injectable } from '@nestjs/common';
import * as randomString from 'randomstring'

@Injectable()
export class UserTokenService {

  generateToken():string {
    return randomString.generate()
  }

}
