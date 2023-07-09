import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, PublicationsModule, PrismaModule]
})
export class AppModule {}
