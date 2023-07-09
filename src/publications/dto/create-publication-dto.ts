import { IsBoolean, IsDate, IsNotEmpty, IsString, Equals } from "class-validator";

export class CreatePublicationDTO {
   @IsString()
   @IsNotEmpty()
   image: string;

   @IsString()
   @IsNotEmpty()
   title: string;

   @IsString()
   @IsNotEmpty()
   text: string;

   @IsDate()
   dateToPublish: Date;

   @IsBoolean()
   @Equals(false)
   published: boolean;

   @IsString()
   @IsNotEmpty()
   socialMedia: string;

   @IsNotEmpty()
   userId: number;
}