import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ChatContact } from '../model';
import { SelectService } from '../select.service';



@Component({
  selector: 'app-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {

 

  contacts: ChatContact[] = [];

  


  constructor(private contactsService: ContactsService, private selectService: SelectService) { }

  ngOnInit(): void {
    this.getContacts();
  }
  onSelect(contact: ChatContact){
    this.selectService.changeSelectedContact(contact);
  }


  getContacts(): void {
    this.contactsService.getContacts().subscribe((contacts: ChatContact[]) => {
      this.contacts = contacts;
      if(contacts.length > 0){
        this.selectService.changeSelectedContact(contacts[0]);
      } 
    });
  }



}
