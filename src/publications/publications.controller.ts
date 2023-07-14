import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDTO } from './dto/create-publication-dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(AuthGuard)
  @Post('publication')
  addPublication(@Body() body:CreatePublicationDTO, @UserRequest() user: User){
    return this.publicationsService.addPublication(body, user.id)
  }

  @UseGuards(AuthGuard)
  @Get('publications')
  getPublications(@UserRequest() user: User){
    return this.publicationsService.getPublications(user.id);
  }
}
