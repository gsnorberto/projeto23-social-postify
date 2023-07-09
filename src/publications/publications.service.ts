import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';
import { createPublicationDTO } from './dto/create-publication-dto';

@Injectable()
export class PublicationsService {
  publications: Publication[] = [];

  getPublications() {
    return this.publications;
  }

  addPublication({image, title, text, dateToPublish, published, socialMedia}: createPublicationDTO) {
    const publication = new Publication(image, title, text, dateToPublish, published, socialMedia)
    return this.publications.push(publication);
  }
}
