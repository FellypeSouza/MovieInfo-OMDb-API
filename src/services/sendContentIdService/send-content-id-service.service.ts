import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendContentIdServiceService {
  contentId:string = "";

  receiveContentId(value:string):void{
    this.contentId = value;
  }

  sendContentId():string{
    return this.contentId;
  }
  constructor() { }
}
