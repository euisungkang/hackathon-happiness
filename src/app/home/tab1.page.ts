import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';

const Sentiment = require('sentiment');
const sentiment = new Sentiment();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userMessage: Message;     //This is the happy message
  public messageList: Array<Message>

  constructor(private messageService: MessageService) {
    this.messageList = [];
  }

  ionViewWillEnter() {
    this.getMessages(); // runs get messageList function every time the component is viewed
  }

  getMessages() {
    this.messageService.getMessages().subscribe(data => {
      this.messageList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Message;
      })
      this.messageList.sort((message1, message2) => ((message1.dateCreated < message2.dateCreated) ? 1 : -1)); // order messageList (optional)
    });
  }

  createMessage(comment) {
    this.userMessage = {
      id: "1",
      score: sentiment.analyze(comment),
      message: comment,
      dateCreated: new Date()
    }
    }
}
