import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/user.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
   constructor(
      private readonly usersService: UsersService,
      private readonly usersRepository: UsersRepository,
      private readonly jwtService: JwtService,
   ) { }

   createToken(user: User) {
      const token = this.jwtService.sign({
         name: user.name,
         email: user.email
      }, {
         expiresIn: '7 days',
         subject: String(user.id),
         issuer: 'Gabriel Norberto',
         audience: 'users'
      });

      return { token };
   }

   async signin({ email, password }: AuthSigninDTO) {
      const user = await this.usersRepository.findUserByEmail(email);
      if (!user) throw new UnauthorizedException("Email or Password Invalid");

      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (passwordIsValid) throw new UnauthorizedException("Email or Password Invalid");
   }

   async signup(body: AuthSignupDTO) {
      const user = await this.usersService.addUser(body);
      return this.createToken(user);
   }
}
