import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactModel } from '../models/contact-model.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchContactsService {

private randomUserURL: string = 'https://randomuser.me/api/';  // URL to web api
private seed: string = 'nuvalence';
private results: number = 10;
  constructor(private httpClient: HttpClient) { }

  getContacts(page: number) {
    page = 1;
    //?results=1000&seed=nuvalence
    this.randomUserURL = `${this.randomUserURL}?page=${page}&results=${this.results}&seed=${this.seed}`
    console.log(this.randomUserURL);
    return this.httpClient.get(this.randomUserURL);
  }
}
