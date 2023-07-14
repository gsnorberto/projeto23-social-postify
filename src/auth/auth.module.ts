import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { PrismaUsersRepository } from 'src/users/repository/implementations/prismaUsers.repository';
import { JwtModule } from '@nestjs/jwt';
import { PublicationsService } from 'src/publications/publications.service';
import { PublicationsRepository } from 'src/publications/repository/publication.repository';
import { PrismaPublicationsRepository } from 'src/publications/repository/implementations/prismaPublications.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    PublicationsService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository
    },
    {
      provide: PublicationsRepository,
      useClass: PrismaPublicationsRepository
    },
  ]
})
export class AuthModule { }