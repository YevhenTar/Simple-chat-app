import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsCardComponent } from './contacts-card/contacts-card.component';
import { ContactMessageComponent } from './contact-message/contact-message.component';
import { HttpService } from './http.service';
import { ContactsFieldComponent } from './contacts-field/contacts-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsCardComponent,
    ContactMessageComponent,
    ContactsFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
