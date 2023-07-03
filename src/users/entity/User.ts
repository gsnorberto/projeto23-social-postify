import { HttpException, HttpStatus } from "@nestjs/common";

export class User {
   constructor(
      private _name: string,
      private _email: string,
      private _password: string,
      private _avatar: string
   ) {}

   set name(name: string) {
      if(name.length < 2) throw new HttpException('Invalid name', HttpStatus.UNPROCESSABLE_ENTITY);
      this.name = name;
   }
   get name(){
      return this.name;
   }

   set email(email: string) {
      this.email = email;
   }
   get email(){
      return this.email;
   }

   set password(password: string) {
      if(password.length < 6 || password.length > 20) throw new HttpException('Invalid password', HttpStatus.UNPROCESSABLE_ENTITY)
      this.password = password;
   }
   get password(){
      return this.password;
   }

   set avatar(avatar: string) {
      if(avatar.length < 2) throw new HttpException('Invalid avatar', HttpStatus.UNPROCESSABLE_ENTITY)
      this.avatar = avatar;
   }
   get avatar(){
      return this.avatar;
   }
}