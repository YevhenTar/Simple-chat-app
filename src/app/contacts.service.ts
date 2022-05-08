import { Inject, Injectable } from '@angular/core';
import { ChatContact, ChatMessage } from './model';
import { CONTACTLIST } from './mock-contacts';
import { Observable, of } from 'rxjs';
import { APP_BASE_HREF, Location } from '@angular/common';
import { AssetsPathService } from './assets-path.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private assetsPath: AssetsPathService,
  ) { }

  getContacts(): Observable<ChatContact[]>{
    const contacts = of(CONTACTLIST.map((item: ChatContact): ChatContact => {
      item.photo = this.assetsPath.getFullPath(item.photo);
      return item;
    }));
    return contacts;
  }

  sortContacts(contactList: ChatContact[]): ChatContact[]{
    const sortedContacts = contactList.sort((a: ChatContact, b: ChatContact): number => {
      return b.messages[b.messages.length-1].currentDate.getTime() - a.messages[a.messages.length-1].currentDate.getTime();
    });
    return sortedContacts;
  }


}
