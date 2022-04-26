import { Injectable } from '@angular/core';
import { ChatContact } from './model';
import { CONTACTLIST } from './mock-contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): Observable<ChatContact[]>{
    const contacts = of(CONTACTLIST);
    return contacts;
  }
}
