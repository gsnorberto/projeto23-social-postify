import { Injectable } from '@nestjs/common';
import { User } from './entity/User';
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  users: User[] = [];

  addUser({ name, email, password, avatar}: CreateUserDTO) {
    const user = new User(name, email, password, avatar);
    return this.users.push(user);
  }
}
