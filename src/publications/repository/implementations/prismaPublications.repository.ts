import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePublicationDTO } from "../../dto/create-publication-dto";
import { PublicationsRepository } from "../publication.repository";

@Injectable()
export class PrismaPublicationsRepository implements PublicationsRepository {
   constructor(private readonly prisma: PrismaService) {}
   
   async addPublication(data: CreatePublicationDTO) {
      await this.prisma.publication.create({ data: data });
   }

   async getPublications(id: number) {
      return await this.prisma.publication.findMany({ where: { userId: id }});
   }

   async getPublicationByTitle(title: string) {
      return await this.prisma.publication.findFirst({ where: { title }});
   }
}