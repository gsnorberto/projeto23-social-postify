import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { PublicationsRepository } from './repository/publication.repository';
import { PrismaPublicationsRepository } from './repository/implementations/prismaPublications.repository';

@Module({
  controllers: [PublicationsController],
  providers: [
    PublicationsService,
    {
      provide: PublicationsRepository,
      useClass: PrismaPublicationsRepository
    }
  ],
})
export class PublicationsModule {}
