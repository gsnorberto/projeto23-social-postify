import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt'
import { UsersRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async addUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10);

    const user = await this.usersRepository.findUserByEmail(data.email);
    if(user) throw new HttpException('Email already exists', HttpStatus.UNPROCESSABLE_ENTITY);

    await this.usersRepository.addUser({...data, password: hashPassword});
  }
}
