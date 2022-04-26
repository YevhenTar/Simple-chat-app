import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { ChatContact } from './model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private pSelectedContact$ = new BehaviorSubject<ChatContact | null>(null);
  
  public changeSelectedContact(selectedContact:ChatContact) {
    this.pSelectedContact$.next(selectedContact);
  }

  get selectedContact$(): Observable<ChatContact | null>  {
    return this.pSelectedContact$.asObservable();
  }

  constructor() { }
  /*
  next(1)
  next(2)
  subribe() - 1
  next(3)
  subribe() - 2
  next(4)
  */
}
