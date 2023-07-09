import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { createPublicationDTO } from './dto/create-publication-dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  addUser(@Body() body:createPublicationDTO){
    return this.publicationsService.addPublication(body)
  }

  @Get()
  getPublications(@Body() body:createPublicationDTO){
    return this.publicationsService.getPublications(body)
  }
}
