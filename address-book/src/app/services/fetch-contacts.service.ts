import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactModel } from '../models/contact-model.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchContactsService {

private seed: string = 'nuvalence';
private results: number = 10;
private currentContact: BehaviorSubject<any> = new BehaviorSubject(null);
public currentUser$ = this.currentContact.asObservable();
private currentPage: number = 1;

  constructor(private httpClient: HttpClient) { }

  getContacts(page: number) {
    const randomUserURL = `https://randomuser.me/api/?page=${page}&results=${this.results}&seed=${this.seed}`;
    return this.httpClient.get(randomUserURL);
  }

  setCurrentContact(contact: ContactModel) {
    this.currentContact.next(contact);
  }

  setCurrentPage(currPage: number) {
    this.currentPage = currPage
  }

  getCurrentPage() {
    return this.currentPage;
  }

}
