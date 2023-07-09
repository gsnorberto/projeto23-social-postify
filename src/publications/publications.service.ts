import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication-dto';
import { PublicationsRepository } from './repository/publication.repository';

@Injectable()
export class PublicationsService {
  constructor(private readonly publicationsRepository: PublicationsRepository) {}

  async getPublications() {
    let userId = 1;
    return await this.publicationsRepository.getPublications(userId);
  }

  async addPublication(data: CreatePublicationDTO) {
    const publication = await this.publicationsRepository.getPublicationByTitle(data.title);
    if(publication) throw new HttpException('Title is already in use', HttpStatus.UNPROCESSABLE_ENTITY);

    await this.publicationsRepository.addPublication(data);
  }
}
