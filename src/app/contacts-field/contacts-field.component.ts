import { Component, OnInit, Input } from '@angular/core';
import { AssetsPathService } from '../assets-path.service';
import { HttpService } from '../http.service';
import { ChatMessage } from '../model';
import { ChatContact } from '../model';
import { SelectService } from '../select.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contacts-field',
  templateUrl: './contacts-field.component.html',
  styleUrls: ['./contacts-field.component.scss']
})
export class ContactsFieldComponent implements OnInit {



  public selectedContact: ChatContact | null = null;

  chuckMessage: string = '';
  




  constructor(
    public assetsPath: AssetsPathService,
    private selectService: SelectService,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.getSelectedContact();
    this.httpService.getData().subscribe((data:any) => this.chuckMessage = data['value']);
  }

  addMessage(newMessage: string) {
  if (newMessage != "" && this.selectedContact !== null) {
      this.selectedContact.messages.push(new ChatMessage(false,newMessage, new Date()));
      window.setTimeout( () => {
        if(this.selectedContact !== null){
          this.selectedContact.messages.push(new ChatMessage(true,this.chuckMessage, new Date()));
        }
      }, 5000);
    }
  };





  getSelectedContact(){
    this.selectService.selectedContact$.subscribe((selectedContact: ChatContact | null) => {
      this.selectedContact = selectedContact;
    });
  

  }

}
