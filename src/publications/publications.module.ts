import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { PublicationsRepository } from './repository/publication.repository';
import { PrismaPublicationsRepository } from './repository/implementations/prismaPublications.repository';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { PrismaUsersRepository } from 'src/users/repository/implementations/prismaUsers.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    })
  ],
  controllers: [PublicationsController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository
    },
    AuthService,
    PublicationsService,
    {
      provide: PublicationsRepository,
      useClass: PrismaPublicationsRepository
    }
  ],
  exports: [
    PublicationsService,
    {
      provide: PublicationsRepository,
      useClass: PrismaPublicationsRepository
    }
  ]
})
export class PublicationsModule {}
