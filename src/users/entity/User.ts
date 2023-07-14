export class User {
   constructor(
      private _name: string,
      private _email: string,
      private _password: string,
      private _avatar: string
   ) {}

   public get avatar(): string {
      return this._avatar;
   }
   public set avatar(value: string) {
      this._avatar = value;
   }
   public get password(): string {
      return this._password;
   }
   public set password(value: string) {
      this._password = value;
   }
   public get email(): string {
      return this._email;
   }
   public set email(value: string) {
      this._email = value;
   }
   public get name(): string {
      return this._name;
   }
   public set name(value: string) {
      this._name = value;
   }
}