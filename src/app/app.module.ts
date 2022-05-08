import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsCardComponent } from './contacts-card/contacts-card.component';
import { HttpService } from './http.service';
import { ContactsFieldComponent } from './contacts-field/contacts-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsCardComponent,
    ContactsFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
