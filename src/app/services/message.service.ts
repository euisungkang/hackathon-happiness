import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { 
  }

  getMessages() {
    return this.firestore.collection('messages').snapshotChanges();
  }

  createMessage(message: Message) {
    return this.firestore.collection('messages').add({...message});
  }

  updateMessage(message: Message): void {
    this.firestore.doc('messages/' + message.id).update(message);
  }

  deleteMessage(message: Message): void {
    this.firestore.doc('messages/' + message.id).delete();
  }

}
