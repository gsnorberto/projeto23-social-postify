import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  addUser(@Body() body:any){
    return this.publicationsService.addPublication(body)
  }

  @Get()
  getPublications(@Body() body:any){
    return this.publicationsService.getPublications(body)
  }
}
