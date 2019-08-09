import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public userMessage: Message;     //This is the happy message
  public messageList: Array<Message>
  public newDate: Date;

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
<<<<<<< HEAD
    this.userMessage = {
      id: "1",
      score: 0,
      message: comment,
      dateCreated: new Date()
    }
    this.messageService.createMessage(this.userMessage);
    this.getMessages();
  }

<<<<<<< Updated upstream
=======
        this.userMessage = {
        id: "1",
        score: sentiment.analyze(comment).comparative,
        message: comment,
        dateCreated: new Date()
        }
    }
>>>>>>> 1eaf15a822de94bcb12f4d15be0f08436b574b9c
=======
  formatDate(unix){
    this.newDate = new Date(unix);
    return this.newDate;
  }

>>>>>>> Stashed changes
}
