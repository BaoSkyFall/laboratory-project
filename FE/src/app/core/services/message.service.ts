import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private message: NzMessageService) { }

  createMessage(message: string, type: string) {
    this.message.create(type, message);
  }
  
}
