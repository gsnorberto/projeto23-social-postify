
export class Publication {
   constructor(
      private _image: string,
      private _title: string,
      private _text: string,
      private _dateToPublish: Date,
      private _published: boolean,
      private _socialMedia: string,
   ) { }
}