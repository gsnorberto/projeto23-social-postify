import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDTO } from './dto/create-publication-dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  addPublication(@Body() body:CreatePublicationDTO){
    return this.publicationsService.addPublication(body)
  }

  @Get()
  getPublications(@Body() body:CreatePublicationDTO){
    return this.publicationsService.getPublications()
  }
}
