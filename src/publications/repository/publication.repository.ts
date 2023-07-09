import { Publication } from "@prisma/client";
import { CreatePublicationDTO } from "../dto/create-publication-dto";

export abstract class PublicationsRepository {
   abstract addPublication(data: CreatePublicationDTO): Promise<void>
   abstract getPublications(id: number): Promise<Publication[]>
   abstract getPublicationByTitle(title: string): Promise<Publication>
}