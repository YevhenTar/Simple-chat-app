import { Inject, Injectable } from '@angular/core';
import { ChatContact } from './model';
import { CONTACTLIST } from './mock-contacts';
import { Observable, of } from 'rxjs';
import { APP_BASE_HREF, Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private location: Location,
  ) { }

  getContacts(): Observable<ChatContact[]>{
    const contacts = of(CONTACTLIST.map((item: ChatContact): ChatContact => {
      item.photo = this.location.prepareExternalUrl(item.photo);
      return item;
    }));
    return contacts;
  }
}
