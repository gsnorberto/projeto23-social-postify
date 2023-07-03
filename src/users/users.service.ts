import { Injectable } from '@nestjs/common';
import { User } from './entity/User';

@Injectable()
export class UsersService {
  addUser({ name, email, password, avatar}: User) {
    new User(name, email, password, avatar);
  }
}
