import { Component, OnInit } from '@angular/core';
import { FetchContactsService } from '../services/fetch-contacts.service';
import { ContactModel } from '../models/contact-model.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Array<any> = [];
  apiDataLoaded: boolean = false;

  constructor(private fetchContacts: FetchContactsService) { }

  ngOnInit(): void {
    var contactList = this.fetchContacts.getContacts(1).subscribe((data: any) => {
      console.log(data);
      if(data && data.results) {
        this.contactList = data.results 
      }
      this.contactList.forEach((contact)=>{
        contact.flipped = false;
      })
      this.apiDataLoaded = true;
    });

  }

}
